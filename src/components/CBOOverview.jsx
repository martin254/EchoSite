import React from "react"
import Title from "./Title"

const CBOOverview = () => {
  const miniCardClass =
    "relative group overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.12),0_2px_0_rgba(255,255,255,0.9)_inset] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(80,68,229,0.22),0_2px_0_rgba(255,255,255,0.95)_inset] dark:border-white/10 dark:from-[#111827] dark:via-[#0b1224] dark:to-[#070b16] dark:shadow-[0_24px_70px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.08)_inset] dark:hover:shadow-[0_34px_90px_rgba(80,68,229,0.28),0_1px_0_rgba(255,255,255,0.12)_inset]"
  const highlightCardClass =
    "group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.13),0_2px_0_rgba(255,255,255,0.9)_inset] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(80,68,229,0.2),0_2px_0_rgba(255,255,255,0.95)_inset] dark:border-white/10 dark:from-[#111827] dark:via-[#0b1224] dark:to-[#070b16] dark:shadow-[0_26px_80px_rgba(0,0,0,0.58),0_1px_0_rgba(255,255,255,0.08)_inset] dark:hover:shadow-[0_36px_100px_rgba(80,68,229,0.26),0_1px_0_rgba(255,255,255,0.12)_inset]"

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
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-14 sm:pb-20 text-gray-700 dark:text-white overflow-visible"
    >
      <div className="pointer-events-none absolute -top-20 left-0 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]" />

      <Title
        title="What we do"
        desc="Inclusive Speech Rights Initiative (ISRI)"
      />

      <div className="w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-slate-50 to-indigo-50/60 p-8 shadow-[0_34px_110px_rgba(15,23,42,0.12),0_2px_0_rgba(255,255,255,0.9)_inset] dark:border-white/10 dark:from-[#101827] dark:via-[#0b1020] dark:to-[#080b15] dark:shadow-[0_38px_120px_rgba(0,0,0,0.62),0_1px_0_rgba(255,255,255,0.08)_inset] sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/12 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-60 w-60 rounded-full bg-cyan-300/14 blur-[90px]" />
          <p className="relative z-10 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-white/85 w-full">
            We address a critical and often overlooked barrier to inclusion: communication. Many people with speech impairments face exclusion from essential information, healthcare, protection mechanisms, education, and economic opportunity — not because they lack ability, but because systems are not communication-friendly.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={miniCardClass}>
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl dark:bg-primary/20" />
              <p className="relative z-10 text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Vision
              </p>
              <p className="relative z-10 text-base text-gray-600 dark:text-white/70 leading-relaxed">
                A society where everyone, regardless of how they communicate, can access services, protection, and
                opportunity with dignity.
              </p>
            </div>

            <div className={miniCardClass}>
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl dark:bg-primary/20" />
              <p className="relative z-10 text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Mission
              </p>
              <p className="relative z-10 text-base text-gray-600 dark:text-white/70 leading-relaxed">
                To design inclusive, technology-enabled solutions that prevent harm, strengthen protection, improve access
                to services, and support recovery and reintegration for people with speech impairments.
              </p>
            </div>

            <div className={miniCardClass}>
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl dark:bg-primary/20" />
              <p className="relative z-10 text-xs font-medium uppercase tracking-wider text-primary mb-3">
                Core Technology
              </p>
              <p className="relative z-10 text-base text-gray-600 dark:text-white/70 leading-relaxed">
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
            className={highlightCardClass}
          >
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center shadow-[0_10px_25px_rgba(80,68,229,0.18)] dark:bg-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-gray-600 dark:text-white/70 leading-relaxed pl-11">
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
