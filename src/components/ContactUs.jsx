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
          "Thank you for reaching out! We’ll get back to you as soon as possible."
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

  return (
    <div
      id="contact-us"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="We’d love to hear from you. Whether you’re a potential partner, researcher, funder, or community member, get in touch to explore collaboration, ask questions, or learn more about our work."
      />

      {/* Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left info card */}
        <div className="lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 p-6 sm:p-8 shadow-xl shadow-gray-100 dark:shadow-white/5">
          <h3 className="text-lg font-semibold">Let’s collaborate</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-white/70">
            We respond to most messages within 24–48 hours. If your message is
            urgent, include “Urgent” in the subject line.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 flex items-center justify-center">
                <img src={assets.email_icon} alt="" className="w-4 opacity-80" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  hello@isrinitiative.org
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 flex items-center justify-center">
                <span className="text-sm opacity-80">📍</span>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  Kenya (community-based programs)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 flex items-center justify-center">
                <span className="text-sm opacity-80">🛡️</span>
              </div>
              <div>
                <p className="text-sm font-medium">Privacy-first</p>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  We only use your details to respond. No spam.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide opacity-70">
              Helpful tip
            </p>
            <p className="text-sm mt-2 text-gray-600 dark:text-white/70">
              Tell us what you’re interested in: partnership, research, funding,
              piloting, or community support.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="lg:col-span-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 p-6 sm:p-8 shadow-xl shadow-gray-100 dark:shadow-white/5">
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="sm:col-span-1">
              <label className="text-sm font-medium">Your name</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 focus-within:ring-2 focus-within:ring-primary/40 transition">
                <img
                  src={assets.person_icon}
                  alt=""
                  className="w-4 opacity-70"
                />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full py-3 text-sm outline-none bg-transparent placeholder:text-gray-400 dark:placeholder:text-white/30"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-1">
              <label className="text-sm font-medium">Email</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 focus-within:ring-2 focus-within:ring-primary/40 transition">
                <img
                  src={assets.email_icon}
                  alt=""
                  className="w-4 opacity-70"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 text-sm outline-none bg-transparent placeholder:text-gray-400 dark:placeholder:text-white/30"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={7}
                placeholder="Tell us how we can help…"
                className="mt-2 w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 p-4 text-sm outline-none placeholder:text-gray-400 dark:placeholder:text-white/30 focus:ring-2 focus:ring-primary/40 transition"
                required
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-white/50">
                By submitting, you confirm this message is sent with informed
                consent.
              </p>
            </div>

            {/* Button */}
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-xs text-gray-500 dark:text-white/50">
                We’ll reply within 24–48 hours.
              </p>

              <button
                type="submit"
                disabled={loading}
                className={`w-max flex items-center gap-2 text-sm px-10 py-3 rounded-full cursor-pointer transition-all
                ${
                  loading
                    ? "bg-primary/60 text-white/90 cursor-not-allowed"
                    : "bg-primary text-white hover:scale-[1.03]"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
                <img src={assets.arrow_icon} alt="" className="w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
