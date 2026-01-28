import React from "react"
import Title from "./Title"
import assets from '../assets/assets'

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
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="What we do"
        desc="Sauti Yetu Initiative is a community-based organization in Kenya building human-centred, ethical technology and community programs so communication is accessible to everyone regardless of disability."
      />

      {/* Short intro block */}
      <div className="w-full max-w-6xl bg-white/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-100 dark:shadow-white/5">
        <p className="text-sm sm:text-base leading-relaxed opacity-90">
          We address a critical and often overlooked barrier to inclusion: communication. Many people with speech
          impairments face exclusion from essential information, healthcare, protection mechanisms, education, and
          economic opportunity not because they lack ability, but because systems are not communication-friendly.
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide opacity-70">Vision</p>
            <p className="mt-2 text-sm opacity-90">
              A society where everyone, regardless of how they communicate, can access services, protection, and opportunity with dignity.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide opacity-70">Mission</p>
            <p className="mt-2 text-sm opacity-90">
              To design inclusive, technology-enabled solutions that prevent harm, strengthen protection, improve access to services,
              and support recovery and reintegration for people with speech impairments.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide opacity-70">Core Technology</p>
            <p className="mt-2 text-sm opacity-90">
              <span className="font-semibold">ECHO</span> is our assistive communication engine that improves clarity while preserving user identity and intent.
            </p>
          </div>
        </div>
      </div>

      {/* Approach cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="h-full rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 p-6 shadow-xl shadow-gray-100 dark:shadow-white/5"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm opacity-75 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CBOOverview

