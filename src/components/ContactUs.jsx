import React, { useState } from "react"
import Title from "./Title"
import assets from "../assets/assets"
import toast from "react-hot-toast"

const ContactUs = () => {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    if (loading) return

    setLoading(true)

    const formData = new FormData(event.target)
    formData.append("access_key", "c67e99b5-3365-4867-90bd-4da9533f0510")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast.success(
          "Thank you for reaching out! We'll get back to you as soon as possible."
        )
        event.target.reset()
      } else {
        toast.error(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "hello@isrinitiative.org",
      href: "mailto:hello@isrinitiative.org",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+254 704 947 156",
      href: "tel:+254704947156",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Kenya (community-based programs)",
      href: null,
    },
  ]

  return (
    <div
      id="contact-us"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute top-40 left-0 h-56 w-56 rounded-full bg-blue-400/10 blur-[60px]" />

      <Title
        title="Get in touch"
        desc="Whether you're a potential partner, researcher, funder, or community member, we'd love to hear from you."
      />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative rounded-[1.75rem] border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 p-7 sm:p-8 shadow-lg shadow-gray-200/30 dark:shadow-none hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Let's collaborate
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/70 mb-8">
              We respond to most messages within 24–48 hours.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-white/70">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200/60 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-800/30 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50 mb-2">
                Privacy-first
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70">
                We only use your details to respond. No spam, ever.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative rounded-[1.75rem] border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 p-7 sm:p-8 shadow-lg shadow-gray-200/30 dark:shadow-none hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-white/80">Name</label>
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 px-4 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/30 transition-all">
                    <img src={assets.person_icon} alt="" className="w-4 opacity-50" />
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full py-3.5 text-sm outline-none bg-transparent placeholder:text-gray-400 dark:placeholder:text-white/30 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-white/80">Email</label>
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 px-4 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/30 transition-all">
                    <img src={assets.email_icon} alt="" className="w-4 opacity-50" />
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full py-3.5 text-sm outline-none bg-transparent placeholder:text-gray-400 dark:placeholder:text-white/30 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-white/80">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="mt-2 w-full rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 p-4 text-sm outline-none placeholder:text-gray-400 dark:placeholder:text-white/30 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
                  required
                />
                <p className="mt-3 text-xs text-gray-500 dark:text-white/50">
                  By submitting, you confirm this message is sent with informed consent.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-gray-500 dark:text-white/50">
                  We'll reply within 24–48 hours.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full cursor-pointer transition-all duration-300 ${
                    loading
                      ? "bg-primary/60 text-white/80 cursor-not-allowed"
                      : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  {loading ? "Sending..." : "Send message"}
                  {!loading && <img src={assets.arrow_icon} alt="" className="w-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs