import React from "react"
import Title from "./Title"
import assets from "../assets/assets"

const OurWork = () => {
  const workData = [
    {
      title: "Echo App",
      status: "LIVE",
      subtitle: "Our first live product, built on the Echo Engine",
      description:
        "Transcription, voice cloning, voice-note export & sharing, and a saved recordings library — all tuned to each user's own voice so clearer communication feels effortless.",
      image: assets.echo2,
      tag: "AAC app",
      link: "/echo",
    },
    {
      title: "Dictation Studio",
      status: "LIVE",
      subtitle: "Capture and organise your thoughts by voice",
      description:
        "A personalised dictation and writing tool that uses the same personalised speech model as Echo, but built for capturing, organising, and drafting longer-form thoughts by voice — journal entries, work notes, messages, and ideas — with the accuracy of a model trained on the user's own voice.",
      image: assets.dictationStudio,
      tag: "Writing",
    },
    {
      title: "Echo Tutor",
      status: "In development",
      subtitle: "Learn mathematics by speaking",
      description:
        "A learning platform that lets students with disabilities do mathematics by speaking rather than writing. Echo Tutor evaluates thinking through a three-stage workflow: free thinking & brainstorming, guided reflection, and guided solution building with a dedicated mathematics-validation layer.",
      image: assets.AITutor,
      tag: "Education",
    },
    {
      title: "Lekezi",
      status: "In development",
      subtitle: "Speech practice for the things you most want to say",
      description:
        "A mobile app that helps people with speech impairments practise specific real-world goals — saying a name, placing an order, giving an introduction. Lekezi deliberately does not try to change how a person sounds; it optimises for confidence and capability on the goals that matter. Built with therapists and NGOs.",
      image: assets.simulizi,
      tag: "Practice",
    },
    {
      title: "VoiceFlow",
      status: "In development",
      subtitle: "Operate the entire web by voice",
      description:
        "An AI-powered Chrome extension letting people with non-standard speech operate the web using their personalised Echo model. Speak conversationally and let an LLM/agentic layer understand intent and take action: fill forms, navigate, read pages, and complete multi-step tasks.",
      image: assets.work_dashboard_management,
      tag: "Web access",
    },
  ]

  const statusClass = {
    LIVE: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
    "In development": "bg-primary/10 text-primary border-primary/20",
    Research: "bg-amber-500/12 text-amber-700 dark:text-amber-300 border-amber-500/25",
  }

  return (
    <div
      id="our-work"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 lg:pt-16 text-gray-700 dark:text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 left-0 h-96 w-96 rounded-full bg-primary/8 blur-[110px]" />
      <div className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-cyan-300/10 blur-[90px]" />
      <div className="pointer-events-none absolute top-60 right-0 h-56 w-56 rounded-full bg-blue-400/10 blur-[70px]" />

      <Title
        title="Our Product Suite"
        desc="Build the model once; every product inherits it. The Echo Engine and Echo App are live and in pilot — the three products below are what we build next on that proven foundation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {workData.map((work) => (
          <article
            key={work.title}
            className="group relative rounded-lg border border-gray-200/50 dark:border-gray-700/40 bg-white dark:bg-gray-900/60 overflow-hidden hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-500"
            style={{ boxShadow: '0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)' }}
          >
            {work.link && (
              <a href={work.link} className="absolute inset-0 z-20 no-underline" aria-label={`View ${work.title}`} />
            )}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={work.image}
                alt={`${work.title} product preview`}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-white/95 text-gray-900 backdrop-blur-sm border border-white/40 shadow-lg">
                  {work.tag}
                </span>
                <span className={`text-sm font-medium px-4 py-1.5 rounded-full border backdrop-blur-sm shadow-lg ${statusClass[work.status]}`}>
                  {work.status}
                </span>
              </div>
            </div>

            <div className="relative z-10 p-7">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {work.title}
              </h3>
              <p className="text-base font-medium text-primary/80 mt-1 mb-4">
                {work.subtitle}
              </p>
              <p className="text-base text-gray-600 dark:text-white/70 leading-relaxed">
                {work.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default OurWork
