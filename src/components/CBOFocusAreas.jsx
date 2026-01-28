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
      title: "Safe Spaces & Service Quality",
      desc: "Tech-enabled feedback and rating mechanisms for services such as health facilities, police desks, education providers, and shelters to strengthen accountability, responsiveness, and inclusion.",
    },
  ]

  return (
    <div
      id="focus-areas"
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 text-gray-700 dark:text-white"
    >
      <Title
        title="Our focus areas"
        desc="We build solution products and community-embedded programs across protection, health, education, and economic inclusion."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {areas.map((a, idx) => (
          <div
            key={idx}
            className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-700
              bg-white dark:bg-gray-900/60
              p-6 shadow-sm hover:shadow-md transition-all"
          >
            <span className="absolute left-0 top-6 h-8 w-1 rounded-full bg-primary/70" />
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {a.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/80 mt-2 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Extra program highlight */}
      <div className="relative w-full max-w-6xl rounded-2xl border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900/60
        p-6 sm:p-8 shadow-sm"
      >
        <span className="absolute left-0 top-8 h-10 w-1 rounded-full bg-primary/70" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Voice to Work
        </h3>
        <p className="text-sm text-gray-600 dark:text-white/80 mt-2 leading-relaxed">
          An inclusive livelihoods program supporting youth and adults with speech impairments to transition into work and entrepreneurship.
          Participants use communication tools to express skills, build CVs and profiles, practise interviews, and communicate confidently with employers and clients.
        </p>
      </div>
    </div>
  )
}

export default CBOFocusAreas
