"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CallPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm text-center">
        <DialogTitle className="sr-only">Call Now</DialogTitle>
        <DialogDescription className="sr-only">Contact us for immediate assistance</DialogDescription>
        <div className="flex flex-col items-center gap-4 py-4">
          <Phone className="w-12 h-12 text-brand-700 mb-2" />
          <h2 className="text-xl font-bold">Need Help? Call Us Now!</h2>
          <p className="text-slate-600 dark:text-slate-300">Our team is ready to assist you 24/7.</p>
          <a href="tel:+12135451265">
            <Button className="w-full bg-gradient-to-r from-brand-800 to-brand-600 hover:from-brand-900 hover:to-brand-700">
              Call +1 (213) 545-1265
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
