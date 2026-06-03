import React, { useMemo } from "react"
import assets from "../assets/assets"

const EchoIntroSection = ({ id, className = "" }) => {
  const echoPrinciples = useMemo(() => [
    {
      number: "01",
      title: "Your Voice, Your Model",
      desc:
        "Echo builds a personalised ASR adapter unique to each user. As you speak, Echo learns your specific voice patterns, pronunciation, and rhythm, getting more accurate over time. No two Echo users share the same model. This is personalised speech AI at scale, starting in Kenya and built for Africa.",
    },
    {
      number: "02",
      title: "Fragmented Speech Understanding",
      desc:
        'Many people with speech impairments communicate in fragments, short, non-linear phrases that carry full meaning. Echo does not just transcribe what you say; it understands what you mean. Utterances like "want doctor. like helping. school England" are reconstructed into "I want to become a doctor. I love helping people. I want to study medicine in England.", with your intent intact.',
    },
    {
      number: "03",
      title: "Trained on Real Non-Standard Speech",
      desc:
        "Echo is powered by a Whisper-based model fine-tuned on real recordings from people with speech impairments, including speakers with Cerebral Palsy, dysarthria, and non-standard Swahili and accented speech. This makes Echo significantly more accurate and respectful than generic speech recognition systems that were never built with your voice in mind.",
    },
    {
      number: "04",
      title: "Identity-Preserving Voice Output",
      desc:
        "Echo enhances speech clarity without erasing who you are. Your tone, identity, and natural voice are preserved throughout, producing both an accurate transcript and enhanced audio output. You stay you. Echo just helps the world hear you better.",
    },
  ], [])

  const waveClass =
    "absolute rounded-full border border-primary/35 dark:border-primary/45 opacity-70"

  return (
    <section
      id={id}
      className={`relative w-full text-gray-700 dark:text-white overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-primary/[0.025] to-primary/[0.04] dark:via-primary/[0.04] dark:to-white/[0.025]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary">
              <span className="h-px w-10 bg-primary/55" />
              What is Echo?
            </span>
            <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-950 dark:text-white leading-[1.03] tracking-tight">
              Echo is ISRI's personalised Automatic Speech Recognition engine.
            </h2>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-white/78 leading-relaxed">
              Built from the ground up for people whose voices the world has ignored.
            </p>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-white/68 leading-relaxed">
              Unlike standard speech AI that expects everyone to sound the same, Echo learns you.
              Your voice. Your patterns. Your intent. Every user gets their own personal model,
              because no two voices are the same, and no two people should have to fight to be
              understood.
            </p>
          </div>

          <div className="relative min-h-[330px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center">
            <div className="pointer-events-none absolute inset-x-8 bottom-8 h-14 rounded-full bg-gray-950/22 blur-3xl dark:bg-black/55" />
            <div className="pointer-events-none absolute top-2 left-8 h-44 w-44 rounded-full bg-cyan-300/25 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-8 right-2 h-56 w-56 rounded-full bg-primary/18 blur-[90px]" />

            <div className="pointer-events-none absolute left-0 top-1/2 hidden h-64 w-32 -translate-y-1/2 lg:block">
              <span className={`${waveClass} left-16 top-20 h-20 w-20 border-r-0 border-b-0 rotate-[-45deg]`} />
              <span className={`${waveClass} left-8 top-12 h-36 w-36 border-r-0 border-b-0 rotate-[-45deg]`} />
              <span className={`${waveClass} left-0 top-4 h-52 w-52 border-r-0 border-b-0 rotate-[-45deg]`} />
            </div>
            <div className="pointer-events-none absolute right-0 top-1/2 hidden h-64 w-32 -translate-y-1/2 lg:block">
              <span className={`${waveClass} right-16 top-20 h-20 w-20 border-l-0 border-t-0 rotate-[-45deg]`} />
              <span className={`${waveClass} right-8 top-12 h-36 w-36 border-l-0 border-t-0 rotate-[-45deg]`} />
              <span className={`${waveClass} right-0 top-4 h-52 w-52 border-l-0 border-t-0 rotate-[-45deg]`} />
            </div>

            <div className="relative w-[330px] sm:w-[520px] lg:w-[600px] max-w-full aspect-[11/6] rotate-[2.5deg] rounded-[2rem] sm:rounded-[2.55rem] bg-gradient-to-br from-[#fbfcff] via-[#cfd6e2] to-[#7e8898] p-[8px] sm:p-[10px] shadow-[0_36px_95px_rgba(15,23,42,0.28),0_10px_22px_rgba(15,23,42,0.13)] dark:shadow-[0_45px_120px_rgba(0,0,0,0.55)]">
              <div className="absolute left-24 -top-1.5 h-1.5 w-20 rounded-full bg-slate-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
              <div className="absolute right-28 -bottom-1.5 h-1.5 w-28 rounded-full bg-slate-500/35 shadow-[inset_0_-1px_0_rgba(255,255,255,0.35)]" />
              <div className="absolute inset-[8px] sm:inset-[10px] rounded-[1.55rem] sm:rounded-[2.12rem] bg-[#050507] shadow-[inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-20px_45px_rgba(0,0,0,0.78)]" />
              <div className="absolute inset-[17px] sm:inset-[21px] rounded-[1.08rem] sm:rounded-[1.55rem] overflow-hidden bg-white">
                <img
                  src={assets.echologo2}
                  alt="Echo logo"
                  className="absolute inset-0 h-full w-full scale-[1.025] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(116deg,rgba(255,255,255,0.28)_0%,transparent_22%,transparent_72%,rgba(255,255,255,0.12)_100%)]" />
              </div>
              <div className="pointer-events-none absolute inset-[17px] sm:inset-[21px] rounded-[1.08rem] sm:rounded-[1.55rem] border border-white/20" />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {echoPrinciples.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-lg border border-gray-200/75 bg-white/82 p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(80,68,229,0.13)] dark:border-white/10 dark:bg-white/[0.055] dark:shadow-none"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-cyan-300/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.28em] text-primary">
                    Feature {feature.number}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xs text-gray-500 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/65">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/68">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EchoIntroSection
