import React, { useState } from "react"
import toast from "react-hot-toast"

const PilotProgramPage = ({ onSubmitApplication }) => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (loading) return

    setLoading(true)
    const form = event.currentTarget

    try {
      await onSubmitApplication(new FormData(form))
      setSubmitted(true)
      form.reset()
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative overflow-hidden px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 text-gray-700 dark:text-white">
      <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-cyan-300/15 blur-[110px]" />

      <section className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">
              Echo Pilot Program
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.04] tracking-tight text-gray-900 dark:text-white">
              Help shape the next generation of accessible speech technology
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-white/72">
              We are inviting early users, caregivers, educators, clinicians, and community
              partners to test Echo and share feedback before wider release.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Early access", "Try new Echo workflows before public launch."],
                ["User-led design", "Your feedback helps improve real communication moments."],
                ["Guided support", "Our team will help you get set up and comfortable."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-lg border border-gray-200/80 bg-white/80 p-4 shadow-sm dark:border-gray-700/70 dark:bg-gray-900/60"
                >
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-white/60">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white/90 p-5 sm:p-7 shadow-[0_30px_100px_rgba(15,23,42,0.1)] dark:border-gray-700/70 dark:bg-gray-900/75">
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-5 dark:border-gray-800">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] text-primary">
                  Apply now
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
                  Join the beta tester group
                </h2>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                Limited spaces
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-gray-600 dark:text-white/70">Full name</span>
                  <input required name="name" type="text" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600 dark:text-white/70">Email address</span>
                  <input required name="email" type="email" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="you@example.com" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-gray-600 dark:text-white/70">I am applying as</span>
                  <select required name="applicantType" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950">
                    <option value="">Select one</option>
                    <option>Person with a speech impairment</option>
                    <option>Caregiver or family member</option>
                    <option>Clinician or therapist</option>
                    <option>Educator or school representative</option>
                    <option>Community organization</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm text-gray-600 dark:text-white/70">Location</span>
                  <input required name="location" type="text" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="City, country" />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-gray-600 dark:text-white/70">Phone number</span>
                <input required name="phone" type="tel" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="+254 700 000 000" />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600 dark:text-white/70">
                  Tell us why you want to join the pilot
                </span>
                <textarea required name="motivation" rows="4" className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="Share your communication needs, goals, or the community you support." />
              </label>

              <label className="block">
                <span className="text-sm text-gray-600 dark:text-white/70">
                  What device would you use for testing?
                </span>
                <input name="device" type="text" className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary dark:border-gray-700 dark:bg-gray-950" placeholder="Android phone, iPhone, tablet, laptop..." />
              </label>

              <label className="flex gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950/60 dark:text-white/70">
                <input required name="consent" value="Applicant agreed to be contacted about the Echo Pilot Program" type="checkbox" className="mt-1 h-4 w-4 accent-primary" />
                <span>
                  I agree to be contacted about the Echo Pilot Program and understand that
                  participation details will be confirmed by the team.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white transition ${
                  loading
                    ? "bg-primary/60 cursor-not-allowed"
                    : "bg-primary hover:scale-[1.01] hover:bg-primary/90"
                }`}
              >
                {loading ? "Submitting..." : "Submit application"}
              </button>

              {submitted && (
                <p className="text-center text-sm text-primary">
                  Thanks for applying. We will review your application and follow up soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PilotProgramPage
