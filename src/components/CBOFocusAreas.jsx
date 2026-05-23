import React from "react"
import Title from "./Title"

const CBOFocusAreas = () => {
  const focusCardClass =
    "group relative h-full overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.13),0_2px_0_rgba(255,255,255,0.9)_inset] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(80,68,229,0.2),0_2px_0_rgba(255,255,255,0.95)_inset] dark:border-white/10 dark:from-[#111827] dark:via-[#0b1224] dark:to-[#070b16] dark:shadow-[0_26px_80px_rgba(0,0,0,0.58),0_1px_0_rgba(255,255,255,0.08)_inset] dark:hover:shadow-[0_36px_100px_rgba(80,68,229,0.26),0_1px_0_rgba(255,255,255,0.12)_inset]"

  const areas = [
    {
      title: "Menstrual & Reproductive Health",
      desc: "Accessible SRHR information and care pathways so people with speech impairments can ask questions, communicate symptoms, and seek services without stigma or dependency.",
    },
    {
      title: "Safeguarding & Protection (SGBV focus)",
      desc: "Survivor-centred support systems that enable safe disclosure, access to care and justice, and inclusive community response grounded in autonomy, confidentiality, and informed consent.",
    },
    {
      title: "Livelihoods & Economic Empowerment",
      desc: "Inclusive pathways to skills, employment, entrepreneurship, and financial literacy — supporting long-term wellbeing, independence, and reintegration.",
    },
    {
      title: "Safe Spaces & Mental Wellness",
      desc: "Inclusive, communication-accessible mental wellness spaces where individuals with non-standard speech can express themselves, access psychosocial support, and engage in therapeutic processes — without being excluded by systems built only for standard communication.",
    },
    {
      title: "Access to Quality Education",
      desc: "Voice-first learning companions that enable students with speech impairments to ask questions, engage with curriculum content, and learn independently — without being excluded by systems built only for standard speech.",
    },
  ]

  return (
    <div
      id="focus-areas"
      className="relative flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 sm:pt-12 pb-8 text-gray-700 dark:text-white overflow-visible"
    >
      <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute -top-10 right-0 h-48 w-48 rounded-full bg-blue-400/10 blur-[60px]" />

      <Title
        title="Our focus areas"
        desc="We build solution products and community-embedded programs across protection, health, education, and economic inclusion."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl">
        {areas.map((a, idx) => (
          <div
            key={idx}
            className={focusCardClass}
          >
            <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="absolute -bottom-20 left-8 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-300/15" />
            <div className="relative z-10 flex gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center shadow-[0_16px_35px_rgba(80,68,229,0.35)] ring-1 ring-white/50 dark:ring-white/10">
                <span className="text-lg font-semibold text-white">{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CBOFocusAreas
