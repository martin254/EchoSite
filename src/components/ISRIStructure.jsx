import React from "react"
import Title from "./Title"

const ISRIStructure = () => {
  const entities = [
    {
      icon: "KE",
      title: "ISRI Kenya Limited",
      subtitle: "Social Enterprise - Nairobi, Kenya",
      body:
        "Our Kenyan entity leads all community-embedded programmes, pilot deployments, user research, and partnerships on the ground. ISRI Kenya works directly with people with speech impairments, caregivers, healthcare providers, and educators to co-create solutions that are grounded in real lived experience.",
      tags: [
        "Community Programmes",
        "Pilot Deployments",
        "User Research",
        "Ground Operations",
      ],
    },
    {
      icon: "UK",
      title: "ISRI UK Limited",
      subtitle: "Limited Company - United Kingdom",
      body:
        "ISRI UK Limited is our newly registered UK entity, anchoring our international fundraising, research partnerships, accelerator engagements, and institutional relationships. Registered in 2026, ISRI UK enables us to access UK and international funding mechanisms and represent ISRI's mission on the global stage.",
      tags: [
        "International Fundraising",
        "Research Partnerships",
        "Accelerator Engagements",
        "UK & Global Operations",
      ],
    },
  ]

  return (
    <section className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-14 sm:pb-20 text-gray-700 dark:text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-16 left-0 h-72 w-72 rounded-full bg-primary/10 blur-[90px]" />
      <div className="pointer-events-none absolute top-36 right-0 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px]" />

      <Title
        title="Two Entities. One Mission."
        desc="ISRI operates through a dual-entity structure designed for accountability, international reach, and deep community rootedness."
      />

      <div className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {entities.map((entity) => (
          <article
            key={entity.title}
            className="group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.13),0_2px_0_rgba(255,255,255,0.9)_inset] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_34px_95px_rgba(80,68,229,0.2),0_2px_0_rgba(255,255,255,0.95)_inset] dark:border-white/10 dark:from-[#111827] dark:via-[#0b1224] dark:to-[#070b16] dark:shadow-[0_26px_80px_rgba(0,0,0,0.58),0_1px_0_rgba(255,255,255,0.08)_inset] dark:hover:shadow-[0_36px_100px_rgba(80,68,229,0.26),0_1px_0_rgba(255,255,255,0.12)_inset]"
          >
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="relative z-10">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold tracking-wider text-primary shadow-[0_10px_25px_rgba(80,68,229,0.18)] dark:bg-primary/20">
                  {entity.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {entity.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/80">
                    {entity.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
                {entity.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {entity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:border-primary/25 dark:bg-primary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="max-w-3xl text-center text-sm italic text-gray-500 dark:text-white/60">
        Formally linked through a cross-entity operational agreement, ISRI Kenya and ISRI UK work as one team toward one vision.
      </p>
    </section>
  )
}

export default ISRIStructure
