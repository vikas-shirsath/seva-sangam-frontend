import Link from "next/link"
import { Gift } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <Gift className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <span className="text-xl font-bold text-orange-600 dark:text-orange-400">SevaSangam</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              SevaSangam connects donors with NGOs to facilitate item donations. Find the right place for your donations
              and make a real impact in your community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-orange-600 dark:text-orange-400">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ngos"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    NGOs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donate"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-orange-600 dark:text-orange-400">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Impact Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-orange-600 dark:text-orange-400">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} SevaSangam. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://facebook.com"
              className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

