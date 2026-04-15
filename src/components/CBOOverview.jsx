import React from "react"
import Title from "./Title"
import assets from "../assets/assets"

const CBOOverview = () => {
  const highlights = [
    {
      title: "Human-centred + co-created",
      desc: "We build with people with speech impairments, caregivers, service providers, and communities — not for them.",
    },
    {
      title: "Rights-based + inclusive",
      desc: "Grounded in dignity, autonomy, safety, and equal access to services and opportunities.",
    },
    {
      title: "Systems-strengthening",
      desc: "Designed to integrate into health, protection, education, and community pathways.",
    },
    {
      title: "Ethical + responsible technology",
      desc: "Privacy, consent, and safety are foundational across all tools and programs.",
    },
  ]

  return (
    <div
      id="about-cbo"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 left-0 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]" />

      <Title
        title="What we do"
        desc="Inclusive Speech Rights Initiative (ISRI)"
      />

      <div className="w-full max-w-6xl">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-white via-white to-primary/5 dark:from-gray-900 dark:via-gray-900/80 dark:to-primary/5 border border-gray-200/60 dark:border-gray-700/50 p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-white/85 w-full">
            We address a critical and often overlooked barrier to inclusion: communication. Many people with speech impairments face exclusion from essential information, healthcare, protection mechanisms, education, and economic opportunity — not because they lack ability, but because systems are not communication-friendly.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/40 p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Vision
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                A society where everyone, regardless of how they communicate, can access services, protection, and
                opportunity with dignity.
              </p>
            </div>

            <div className="relative group rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/40 p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Mission
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                To design inclusive, technology-enabled solutions that prevent harm, strengthen protection, improve access
                to services, and support recovery and reintegration for people with speech impairments.
              </p>
            </div>

            <div className="relative group rounded-xl border border-gray-200/60 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/40 p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Core Technology
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                <span className="font-semibold text-gray-900 dark:text-white">ECHO</span>{" "}
                is our assistive communication engine that improves clarity while preserving user identity and intent.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-full rounded-2xl border border-gray-200/60 dark:border-gray-700/50 bg-white dark:bg-gray-900/40 p-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed pl-5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CBOOverview