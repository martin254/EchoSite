import React from "react"
import Title from "./Title"
import assets from "../assets/assets"

const OurWork = () => {
  const workData = [
    {
      title: "Nena : Assistive communication for survivors",
      description:
        "An assistive communication tool that enables survivors of sexual violence with speech impairments to safely record their experiences, generate accurate transcripts, and share them with trusted support systems — without the pressure of real-time verbal disclosure.",
      image: assets.Nena,
      tag: "Survivor Support",
    },
    {
      title: "Lulu : Voice-first women’s health companion",
      description:
        "An AI-powered, voice-first health companion supporting women with speech impairments across menstrual and reproductive health journeys through accessible, culturally relevant, and stigma-free voice interactions.",
      image: assets.Lulu,
      tag: "Women’s Health",
    },
    {
      title: "Safe Spaces : Accessibility-aware location discovery",
      description:
        "An accessibility-first discovery feature that helps people with speech impairments identify supportive, disability-friendly spaces using community-driven ratings focused on communication and interaction needs.",
      image: assets.safespace,
      tag: "Safe Spaces",
    },
    {
      title: "Voice to Work : Inclusive pathways to work and enterprise",
      description:
        "An economic empowerment program supporting youth and adults with speech impairments—especially survivors of SGBV—to transition from education into safe, sustainable work and entrepreneurship. Powered by AI-enabled communication tools, Voice to Work removes barriers to training, employment, and income generation while building skills, confidence, and long-term economic independence.",
      image: assets.livelihods,
      tag: "Economic Empowerment",
    },
  ]

  return (
    <div
      id="our-work"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Projects"
        desc="Technology built with communities, designed for dignity, access, and real-world impact."
      />

      <div className="grid sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-56 sm:h-64 object-cover transform transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Soft overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 text-gray-900 backdrop-blur dark:bg-gray-900/70 dark:text-white border border-white/40 dark:border-gray-700">
                  {work.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {work.title}
              </h3>

              <p className="text-sm mt-2 text-gray-600 dark:text-white/75 leading-relaxed">
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
