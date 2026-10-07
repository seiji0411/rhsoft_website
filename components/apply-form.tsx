"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send, CheckCircle, Upload, FileText, X } from "lucide-react"
import { availabilityOptions, disabilityOptions, RESUME_MAX_BYTES, RESUME_TYPES } from "@/lib/careers"

const applySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20, "Phone number is too long"),
  technicalSkills: z
    .string()
    .trim()
    .min(10, "Please describe your technical skills (at least 10 characters)")
    .max(3000, "Please keep this under 3000 characters"),
  availability: z.enum(availabilityOptions, { required_error: "Please select your availability" }),
  disability: z.enum(disabilityOptions),
  resume: z
    .custom<File>((value) => typeof File !== "undefined" && value instanceof File, "Please attach your resume")
    .refine((file) => file.type in RESUME_TYPES, "Resume must be a PDF, DOC, or DOCX file")
    .refine((file) => file.size <= RESUME_MAX_BYTES, "Resume must be 4 MB or smaller"),
})

type ApplyFormData = z.infer<typeof applySchema>

export function ApplyForm({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      technicalSkills: "",
      availability: undefined,
      disability: "Prefer not to say",
      resume: undefined,
    },
  })

  const clearResume = () => {
    form.setValue("resume", undefined as unknown as File, { shouldValidate: true })
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true)
    try {
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        throw new Error("You are offline. Please check your internet connection and try again.")
      }

      const body = new FormData()
      body.append("jobId", jobId)
      body.append("fullName", data.fullName)
      body.append("email", data.email)
      body.append("phone", data.phone)
      body.append("technicalSkills", data.technicalSkills)
      body.append("availability", data.availability)
      body.append("disability", data.disability)
      body.append("resume", data.resume)

      const response = await fetch("/api/apply", { method: "POST", body })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        toast({
          title: "Application submitted!",
          description: "Check your inbox for a confirmation email.",
        })
      } else {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(payload?.error || "Failed to submit application")
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Please try again or email support@rhsoft.co.uk."

      toast({
        title: "Error submitting application",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Application Submitted!</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Thank you for applying for {jobTitle}. We&apos;ve sent a confirmation to your email and will be in touch soon.
        </p>
        <Button asChild variant="outline">
          <Link href="/careers">Back to careers</Link>
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter your phone number" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="technicalSkills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Technical Skills *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. React, Next.js, Node.js, TypeScript, PostgreSQL, AWS..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Languages, frameworks, tools, and anything you&apos;re proud of building.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="When can you start?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="disability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you have a disability?</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {disabilityOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Voluntary. Your answer won&apos;t affect your application.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume *</FormLabel>
              <FormControl>
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      if (file) {
                        form.setValue("resume", file, { shouldValidate: true })
                      }
                    }}
                  />
                  {field.value ? (
                    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 px-4 py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <FileText className="w-5 h-5 text-brand-700 dark:text-brand-300 shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-200 truncate">{field.value.name}</span>
                      </div>
                      <Button type="button" variant="ghost" size="icon" onClick={clearResume} aria-label="Remove resume">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/40 px-4 py-8 text-slate-600 dark:text-slate-300 hover:border-brand-600 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                    >
                      <Upload className="w-6 h-6" />
                      <span className="text-sm font-medium">Click to upload your resume</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">PDF, DOC, or DOCX, up to 4 MB</span>
                    </button>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700 text-white py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Application
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
