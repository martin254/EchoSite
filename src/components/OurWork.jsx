import React from "react"
import Title from "./Title"
import assets from "../assets/assets"

const OurWork = () => {
  const workData = [
    {
      title: "Echo App",
      status: "LIVE — IN PILOT",
      subtitle:
        "Communication in your own voice. Our first live product, built on the Echo Engine and currently in active pilot testing.",
      description:
        "Echo App is an augmentative and alternative communication (AAC) app for people whose speech is hard for others, and for everyday technology, to understand. Instead of replacing a person's voice with symbol boards or typed-out sentences, Echo uses the person's own voice, understood through the personalised Echo speech engine, and relays it instantly as clear on-screen text and a natural spoken voice.",
      image: assets.echo2,
      tag: "AAC app",
      link: "/echo",
    },
    {
      title: "Echo Flow",
      status: "IN DEVELOPMENT",
      subtitle:
        "Type with your voice, finally, for every voice. Fast, accurate dictation for the millions locked out of the voice-typing revolution.",
      description:
        "Echo Flow is a dictation tool: speak, and your words appear as text in any app, email, documents, chat, code. It's powered by the same personalised Echo speech engine, so it works for people whose speech mainstream dictation tools can't handle. Currently in development.",
      image: assets.dictationStudio,
      tag: "Dictation",
    },
    {
      title: "Echo Live",
      status: "IN DEVELOPMENT",
      subtitle:
        "Be understood, live. Real-time personalised captioning for calls, presentations, livestreams and content, powered by your own Echo model.",
      description:
        "Echo Live brings real-time, personalised captioning to any live speaking moment, not just calls. Whether it's a voice or video call, a live presentation or talk, or content posted on social media, Echo Live generates captions from that speaker's own personalised Echo model, so nonstandard speech is understood instantly by anyone watching or listening, no installation required on the viewer's side. Currently in development.",
      image: assets.echoLive,
      tag: "Live Captioning",
    },
  ]

  const statusClass = {
    "LIVE — IN PILOT": "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
    "IN DEVELOPMENT": "bg-gray-100/90 text-gray-700 border-gray-300/80 dark:bg-gray-800/80 dark:text-gray-200 dark:border-gray-600/70",
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
        desc="Build the model once; every product inherits it. The Echo Engine and Echo App are live and in pilot — the products below are what we build next on that proven foundation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {workData.map((work) => (
          <article
            key={work.title}
            className="group relative rounded-lg border border-gray-200/50 dark:border-gray-700/40 bg-white dark:bg-gray-900/60 overflow-hidden hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-500"
            style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" }}
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
