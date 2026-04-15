import React from "react"
import Title from "./Title"
import assets from "../assets/assets"

const OurWork = () => {
  const workData = [
    {
      title: "Nena",
      subtitle: "Assistive communication for survivors",
      description:
        "An assistive communication tool that enables survivors of sexual violence with speech impairments to safely record their experiences, generate accurate transcripts, and share them with trusted support systems — without the pressure of real-time verbal disclosure.",
      image: assets.Nena,
      tag: "Survivor Support",
    },
    {
      title: "Lulu",
      subtitle: "Voice-first women's health companion",
      description:
        "An AI-powered, voice-first health companion supporting women with speech impairments across menstrual and reproductive health journeys through accessible, culturally relevant, and stigma-free voice interactions.",
      image: assets.Lulu,
      tag: "Women's Health",
    },
    {
      title: "Safe Spaces",
      subtitle: "Mental wellness for all voices",
      description:
        "Inclusive, communication-accessible mental wellness spaces where individuals with non-standard speech can express themselves, access psychosocial support, and engage in therapeutic processes.",
      image: assets.mentalhealth,
      tag: "Safe Spaces",
    },
    {
      title: "Echo Tutor",
      subtitle: "Access to quality education",
      description:
        "Voice-first learning companions that enable students with speech impairments to ask questions, engage with curriculum content, and learn independently.",
      image: assets.AITutor,
      tag: "Education",
    },
    {
      title: "Voice to Work",
      subtitle: "Inclusive pathways to work",
      description:
        "An economic empowerment program supporting youth and adults with speech impairments to transition from education into safe, sustainable work and entrepreneurship.",
      image: assets.livelihods,
      tag: "Economy",
    },
  ]

  return (
    <div
      id="our-work"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <div className="pointer-events-none absolute -top-20 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-[90px] -translate-x-10" />
      <div className="pointer-events-none absolute top-60 -right-32 h-56 w-56 rounded-full bg-blue-400/10 blur-[70px] translate-x-10" />

      <Title
        title="Our Projects"
        desc="Technology built with communities, designed for dignity, access, and real-world impact."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="group relative rounded-[2rem] border border-gray-200/50 dark:border-gray-700/40 bg-white dark:bg-gray-900/60 overflow-hidden hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-3 transition-all duration-500"
            style={{ boxShadow: '0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)' }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-400/5 blur-2xl group-hover:bg-blue-400/10 transition-all" />
            
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              
              <div className="absolute top-5 left-5">
                <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-white/95 text-gray-900 backdrop-blur-sm border border-white/40 shadow-lg">
                  {work.tag}
                </span>
              </div>
            </div>

            <div className="relative z-10 p-7">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-sm font-medium text-primary/80 mt-1 mb-4">
                {work.subtitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurWork