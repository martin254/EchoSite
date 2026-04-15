import React from "react"
import Title from "./Title"

const CBOFocusAreas = () => {
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
      className="relative flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 text-gray-700 dark:text-white overflow-hidden"
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
            className="group relative h-full rounded-2xl border border-gray-200/60 dark:border-gray-700/50 bg-white dark:bg-gray-900/40 p-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">{idx + 1}</span>
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