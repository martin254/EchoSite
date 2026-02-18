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
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="What we do"
        desc="Inclusive Speech Rights Initiative (ISRI) is a non-governmental organization based in Kenya, dedicated to developing human-centred and ethical solutions that empower people with speech impairments to access services, protection, and opportunities with dignity—free from stigma or dependency."
      />

      {/* Intro block */}
      <div className="w-full max-w-6xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm">
        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/80">
          We address a critical and often overlooked barrier to inclusion: communication. Many people with speech
          impairments face exclusion from essential information, healthcare, protection mechanisms, education, and
          economic opportunity — not because they lack ability, but because systems are not communication-friendly.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Vision */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/60">
              Vision
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
              A society where everyone, regardless of how they communicate, can access services, protection, and
              opportunity with dignity.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/60">
              Mission
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
              To design inclusive, technology-enabled solutions that prevent harm, strengthen protection, improve access
              to services, and support recovery and reintegration for people with speech impairments.
            </p>
          </div>

          {/* Core tech */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-white/60">
              Core Technology
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/80">
              <span className="font-semibold text-gray-900 dark:text-white">ECHO</span>{" "}
              is our assistive communication engine that improves clarity while preserving user identity and intent.
            </p>
          </div>
        </div>
      </div>

      {/* Approach cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-white/75">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CBOOverview

