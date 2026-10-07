import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { jobs, availabilityOptions, disabilityOptions, RESUME_MAX_BYTES, RESUME_TYPES } from "@/lib/careers"
import { sendApplicationNotification, sendApplicationConfirmation } from "@/lib/email"

export const runtime = "nodejs"

const applicationSchema = z.object({
  jobId: z.string().min(1),
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7).max(20),
  technicalSkills: z.string().trim().min(10).max(3000),
  availability: z.enum(availabilityOptions),
  disability: z.enum(disabilityOptions),
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data = applicationSchema.parse({
      jobId: formData.get("jobId"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      technicalSkills: formData.get("technicalSkills"),
      availability: formData.get("availability"),
      disability: formData.get("disability"),
    })

    const job = jobs.find((item) => item.id === data.jobId)
    if (!job) {
      return NextResponse.json({ error: "This role is no longer open." }, { status: 404 })
    }

    const resume = formData.get("resume")
    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Please attach your resume." }, { status: 400 })
    }

    const extension = RESUME_TYPES[resume.type]
    if (!extension) {
      return NextResponse.json({ error: "Resume must be a PDF, DOC, or DOCX file." }, { status: 400 })
    }

    if (resume.size > RESUME_MAX_BYTES) {
      return NextResponse.json({ error: "Resume must be 4 MB or smaller." }, { status: 400 })
    }

    const buffer = Buffer.from(await resume.arrayBuffer())
    const safeName = data.fullName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "applicant"
    const resumeFileName = `${safeName}-resume.${extension}`

    const application = {
      jobTitle: job.title,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      technicalSkills: data.technicalSkills,
      availability: data.availability,
      disability: data.disability,
      resumeFileName,
    }

    const notificationResult = await sendApplicationNotification(application, {
      filename: resumeFileName,
      content: buffer,
      contentType: resume.type,
    })

    if (!notificationResult.success) {
      console.error("Failed to send application notification:", notificationResult.error)
      return NextResponse.json(
        { error: "Failed to submit your application. Please try again or email support@rhsoft.co.uk." },
        { status: 500 },
      )
    }

    const confirmationResult = await sendApplicationConfirmation(application)

    if (!confirmationResult.success) {
      console.warn("Failed to send application confirmation:", confirmationResult.error)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        confirmationSent: confirmationResult.success,
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    console.error("Application form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
