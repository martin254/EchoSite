import React, { useState } from "react"
import Title from "./Title"
import assets from "../assets/assets"
import toast from "react-hot-toast"

const getFormServiceConfig = () => ({
  accessKey: globalThis.atob("YzY3ZTk5YjUtMzM2NS00ODY3LTkwYmQtNGRhOTUzM2YwNTEw"),
  endpoint: ["https://api.", "web3", "forms", ".com/submit"].join(""),
})

const ContactUs = () => {
  const [loading, setLoading] = useState(false)
  const [activeMap, setActiveMap] = useState("kenya")

  const locations = [
    {
      id: "kenya",
      label: "Kenya",
      name: "Nairobi, Kenya",
      address: "Echo pilots and user research",
      area: "Community partnerships, pilot deployments, and user research remain led on the ground in Kenya.",
      mapSrc: "https://www.google.com/maps?q=Nairobi,+Kenya&output=embed",
      mapTitle: "Map showing Nairobi, Kenya",
    },
    {
      id: "uk",
      label: "UK Office",
      name: "The Exchange, University of Birmingham",
      address: "3 Centenary Square, Birmingham, B1 2DR, United Kingdom",
      shortAddress: "The Exchange, 3 Centenary Square, Birmingham, B1 2DR",
      area: "Centenary Square, Birmingham city centre, directly opposite the Library of Birmingham.",
      mapSrc: "https://www.google.com/maps?q=The+Exchange,+3+Centenary+Square,+Birmingham+B1+2DR&output=embed",
      mapTitle: "Map showing The Exchange, University of Birmingham",
      directionsUrl: "https://www.google.com/maps/search/?api=1&query=The+Exchange+3+Centenary+Square+Birmingham+B1+2DR",
    },
  ]

  const gettingHere = [
    ["Metro", 'the "Library" West Midlands Metro stop is directly in front of the building.'],
    ["Train", "Birmingham New Street is about a 10 minute walk."],
    ["Bus", "several routes serve Centenary Square, and the nearest stop is Baskerville House."],
    ["Car", "there is no on site parking, and the building is inside Birmingham's Clean Air Zone. Visitors should use a nearby car park and check charges beforehand."],
    ["Accessibility", "wheelchair users and people with limited mobility should use the North Entrance via Bridge Street."],
  ]

  const activeLocation = locations.find((location) => location.id === activeMap) || locations[0]

  const onSubmit = async (event) => {
    event.preventDefault()
    if (loading) return

    setLoading(true)
    const formData = new FormData(event.target)
    const { accessKey, endpoint } = getFormServiceConfig()
    formData.append("access_key", accessKey)

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        toast.success("Thank you for reaching out! We'll get back to you as soon as possible.")
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
      label: "Email",
      value: "hello@isrinitiative.org",
      href: "mailto:hello@isrinitiative.org",
    },
    {
      label: "Phone",
      value: "+254 704 947 156",
      href: "tel:+254704947156",
    },
    {
      label: "Location",
      value: "Kenya and The Exchange, 3 Centenary Square, Birmingham, B1 2DR",
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
              We respond to most messages within 24 to 48 hours.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
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
                Privacy first
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
                    <img src={assets.person_icon} alt="Name field icon" className="w-4 opacity-50" />
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
                    <img src={assets.email_icon} alt="Email field icon" className="w-4 opacity-50" />
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
                  We'll reply within 24 to 48 hours.
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
                  {!loading && <img src={assets.arrow_icon} alt="Send message" className="w-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="w-full max-w-6xl rounded-[1.75rem] border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 p-7 sm:p-8 shadow-lg shadow-gray-200/30 dark:shadow-none">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
              Locations
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Find us at The Exchange
            </h3>
          </div>
          <div className="inline-flex w-fit rounded-full border border-gray-200/70 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-950/60">
            {locations.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => setActiveMap(location.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeMap === location.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary dark:text-white/70"
                }`}
              >
                {location.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.id}
              className="rounded-2xl border border-gray-200/70 bg-gray-50/70 p-5 dark:border-gray-700/60 dark:bg-gray-800/30"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
                {location.label}
              </p>
              <h4 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {location.name}
              </h4>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-white/80">
                {location.address}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                {location.area}
              </p>
              {location.directionsUrl && (
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-primary dark:bg-white dark:text-gray-900 dark:hover:bg-primary dark:hover:text-white"
                >
                  Get directions
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-gray-200/70 bg-gray-50/70 p-5 dark:border-gray-700/60 dark:bg-gray-800/30">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white/50">
              Getting here
            </p>
            <h4 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
              UK Office
            </h4>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 dark:text-white/70">
              {gettingHere.map(([mode, detail]) => (
                <li key={mode}>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {mode}:
                  </span>{" "}
                  {detail}
                </li>
              ))}
            </ol>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200/70 bg-gray-100 dark:border-gray-700/60 dark:bg-gray-950">
            <iframe
              title={activeLocation.mapTitle}
              src={activeLocation.mapSrc}
              className="h-[320px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
