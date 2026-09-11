import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Github } from "lucide-react"

const socialLinks = {
  // facebook: "https://www.facebook.com/profile.php?id=61572219296564",
  // twitter: "https://x.com/rhsoft_org",
  // instagram: "https://www.instagram.com/rhsoft_org/",
  linkedin: "https://www.linkedin.com/company/rhsoft-org/",
  github: "https://github.com/RhSoftOrg",
}

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="RhSoft Logo" className="w-8 h-8 object-contain rounded-lg" />
              <span className="text-xl font-bold">RhSoft</span>
            </div>
            <p className="text-slate-300 mb-6">
              RHSoft is a software development company that provides custom software solutions for businesses. Transforming visions into reality with
              expert craftsmanship and innovative software solutions.
            </p>
            <div className="flex space-x-4">
              {/* <Link href={socialLinks.facebook} target="_blank" className="hover:bg-brand-700 size-10 flex items-center justify-center rounded-full">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href={socialLinks.twitter} target="_blank" className="hover:bg-brand-700 size-10 flex items-center justify-center rounded-full">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href={socialLinks.instagram} target="_blank" className="hover:bg-brand-700 size-10 flex items-center justify-center rounded-full">
                <Instagram className="w-5 h-5" />
              </Link> */}
              {/* <Link href={socialLinks.linkedin} target="_blank" className="hover:bg-brand-700 size-10 flex items-center justify-center rounded-full">
                <Linkedin className="w-5 h-5" />
              </Link> */}
              <Link href={socialLinks.github} target="_blank" className="hover:bg-brand-700 size-10 flex items-center justify-center rounded-full">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#ai" className="text-slate-300 hover:text-white transition-colors">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/services#blockchain" className="text-slate-300 hover:text-white transition-colors">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="text-slate-300 hover:text-white transition-colors">
                  Web
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-slate-300 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-slate-300 hover:text-white transition-colors">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">3 Mill Ln, Southwold IP18 6HW, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <p className="text-slate-300">+1 (213) 545-1265</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <p className="text-slate-300">support@rhsoft.co.uk</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-300">Subscribe to our newsletter for latest updates and offers.</p>
            </div>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-brand-900 border-brand-600 text-white placeholder:text-slate-400"
              />
              <Button className="bg-white text-brand-800 hover:bg-brand-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2026 RhSoft. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-slate-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
