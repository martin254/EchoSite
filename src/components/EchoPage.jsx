import React, { useEffect, useMemo, useRef, useState } from "react"
import assets, { audioExamples } from "../assets/assets"

const EchoPage = () => {
  const frameCount = 7
  const [ready, setReady] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [progress, setProgress] = useState(0)
  const [imgError, setImgError] = useState(false)
  const sectionRef = useRef(null)
  const imagesRef = useRef([])

  const steps = [
    {
      badge: "01",
      title: " Why This Matters (Personalisation overview)",
      desc:
        "Echo’s personalisation starts with a simple fact: generic speech recognition understands only about 30% of what you say. By recording 500 short phrases, Echo builds a voice model tailored to your unique speech patterns. After this training, most people are understood correctly on the first try  up to 80% accuracy. Your recordings are never shared and are used only to improve how Echo recognises you.",
      frame: 0,
    },
    {
      badge: "02",
      title: "Pick Your Language",
      desc:
        "This step selects the acoustic and language model that Echo will train first. English and Swahili are currently available (more languages can be added later). Choosing your primary language ensures the system matches your phonemes, grammar, and common word sequences. Personalisation starts from the correct base model so that the 500 phrases you record fine‑tune the right one, not a mismatched one.",
      frame: 1,
    },
    {
      badge: "03",
      title: "Prepare Your Recording Session",
      desc:
        "Get ready to train Echo to understand your unique voice. We'll ask you to confirm that you're in a quiet space, understand how your voice data will be used, and agree to pace yourself—about 50 phrases per day. This ensures high-quality training without strain.",
      frame: 2,
    },
    {
      badge: "04",
      title: "Read Phrases Aloud",
      desc:
        "You'll read a series of phrases aloud—around 500 in total—directly in the app. Echo listens to the acoustic patterns of your speech, whether you're speaking Swahili or English. Your progress saves automatically, so you can pause and pick up right where you left off.",
      frame: 3,
    },
    {
      badge: "05",
      title: "Train Your Personal Model",
      desc:
        "Once you've completed the phrases, Echo gets to work. Our AI—built on Whisper and fine-tuned with Kenyan non-standard speech—creates a personalized model just for you. You'll see your training status, total samples collected, and languages trained (Swahili and English).",
      frame: 4,
    },
    {
      badge: "06",
      title: "Activate & Select Language",
      desc:
        "Your personal voice model is now active. Choose your preferred language—Swahili, English, or both—and start using Echo. The app will confirm your voice is ready, and you can begin speaking naturally, just as you would in everyday conversation.",
      frame: 5,
    },
    {
      badge: "07",
      title: "Test, Correct & Generate Audio",
      desc:
        "Speak naturally, and Echo will show you exactly what it understood. You can tap to edit any transcription, then generate clear, amplified audio from your speech. This step confirms that Echo truly understands you—without struggle or repetition.",
      frame: 6,
    },
  ]

  const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length))

  const framePath = useMemo(
    () => (index) => `/echo-seq/echo_${String(index + 1).padStart(4, "0")}.jpg`,
    []
  )

  useEffect(() => {
    let loaded = 0
    imagesRef.current = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image()
      img.src = framePath(i)
      img.onload = () => {
        loaded += 1
        if (loaded === frameCount) setReady(true)
      }
      return img
    })
  }, [frameCount, framePath])

  useEffect(() => {
    if (!ready) return
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const section = sectionRef.current
        if (!section) return

        const rect = section.getBoundingClientRect()
        const scrollY = window.scrollY
        const start = rect.top + scrollY
        const total = section.offsetHeight
        const stepHeight = total / steps.length
        const rawStep = (scrollY - start) / stepHeight
        const stepIndex = Math.min(
          steps.length - 1,
          Math.max(0, Math.floor(rawStep))
        )

        const end = start + total - window.innerHeight
        const rawProgress = (scrollY - start) / (end - start)
        const clamped = Math.min(Math.max(rawProgress, 0), 1)
        setProgress(clamped)
        setCurrentFrame(steps[stepIndex].frame)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [ready, steps.length])

  const frameSrc = framePath(currentFrame)

  return (
    <div
      id="echo"
      className="relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 text-gray-700 dark:text-white overflow-x-clip"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-[90px]" />
      <div className="pointer-events-none absolute top-32 -right-20 h-96 w-96 rounded-full bg-blue-400/20 blur-[110px]" />

      <section className="w-full max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-white/60">
            ECHO PLATFORM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-gray-900 dark:text-white leading-[1.04] tracking-tight max-w-4xl">
            Echo makes communication feel effortless
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl text-gray-600 dark:text-white/75">
            265 million people live with speech impairments 
worldwide. Most voice technology was not built 
for them. Echo personalises to each speaker's 
unique voice patterns, making communication 
technology finally work for the people who 
need it most.

          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/#contact-us"
              className="text-sm sm:text-base bg-primary text-white px-6 py-3 rounded-full hover:scale-[1.02] transition-all"
            >
              Request a demo
            </a>
            <a
              href="#echo-story"
              className="text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary/60 transition-all"
            >
              Personalisation Process
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900/60">
          <img
            src={assets.echo2}
            alt="Echo platform preview"
            className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover"
          />
        </div>
      </section>

      <section
        id="echo-story"
        ref={sectionRef}
        className="hidden lg:block w-full max-w-6xl mt-16 relative pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="relative flex flex-col lg:pr-4 rounded-[2.25rem] border border-gray-200/80 dark:border-gray-700/80 bg-white/60 dark:bg-gray-900/30 backdrop-blur-2xl shadow-[0_24px_80px_rgba(15,23,42,0.08)] p-6 sm:p-7 lg:p-8 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -left-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute top-20 right-0 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="mb-10 relative z-10">
              <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gray-500 dark:text-white/55">
                Onboarding story
              </span>
              <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white leading-[1.05] tracking-tight">
                An experience that adapts to every voice
              </h2>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-600 dark:text-white/70 leading-relaxed">
                Scroll to move through Echo's onboarding. Each step is designed to feel calm,
                guided, and personal rather than busy or technical.
              </p>
            </div>

            {steps.map((step, idx) => (
              <div key={step.badge} className="min-h-[85vh] flex items-center">
                <div
                  className="rounded-[1.8rem] border px-6 py-5 transition-all duration-500 w-full relative z-10"
                  style={{
                    opacity: idx === activeIndex ? 1 : 0.48,
                    transform: `translateY(${idx === activeIndex ? 0 : 14}px) scale(${idx === activeIndex ? 1 : 0.985})`,
                    filter: `blur(${idx === activeIndex ? 0 : 1.5}px)`,
                  }}
                >
                  <div
                    className={`rounded-[1.55rem] border px-5 py-5 transition-all duration-500 shadow-sm ${
                      idx === activeIndex
                        ? "border-primary/50 bg-gradient-to-br from-white/95 via-primary/5 to-white/80 dark:from-gray-900/80 dark:via-gray-900/55 dark:to-gray-900/40 shadow-[0_18px_40px_rgba(80,68,229,0.12)]"
                        : "border-gray-200/90 dark:border-gray-700/80 bg-white/70 dark:bg-gray-900/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.28em] text-gray-500 dark:text-white/55">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/35 bg-white/70 text-primary">
                        {step.badge}
                      </span>
                      {step.title}
                    </div>
                    <p className="text-sm sm:text-base mt-3 text-gray-600 dark:text-white/74 leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-20 lg:self-start lg:justify-self-end">
            <div className="relative w-full lg:w-[290px] xl:w-[320px] mx-auto lg:mx-0 aspect-[9/17.1] rounded-[3rem] bg-gradient-to-br from-[#f7f7f8] via-[#ececee] to-[#d9dade] p-[9px] shadow-[0_55px_140px_rgba(15,23,42,0.32)] transform-gpu lg:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(1deg)_translateZ(0)] lg:origin-center transition-transform duration-500">
              <div className="pointer-events-none absolute -bottom-7 left-1/2 h-10 w-[86%] -translate-x-1/2 rounded-full bg-black/18 blur-3xl" />
              <div
                className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/18 blur-[80px] z-0"
                style={{ transform: `translateY(${progress * 30}px)` }}
              />
              <div
                className="pointer-events-none absolute top-16 right-8 h-56 w-56 rounded-full bg-blue-400/15 blur-[100px] z-0"
                style={{ transform: `translateY(${progress * -35}px)` }}
              />
              <div className="absolute inset-[9px] rounded-[2.7rem] bg-gradient-to-br from-[#1a1a1c] via-[#101013] to-[#232326] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-24px_40px_rgba(0,0,0,0.45)] z-0" />
              <div className="absolute inset-[12px] rounded-[2.5rem] border border-white/12 z-10" />

              <div className="absolute -left-0.5 top-28 h-12 w-1 rounded-full bg-black/35 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
              <div className="absolute -left-0.5 top-44 h-16 w-1 rounded-full bg-black/35 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
              <div className="absolute -right-0.5 top-28 h-14 w-1 rounded-full bg-black/25 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
              <div className="absolute -right-0.5 top-46 h-20 w-1 rounded-full bg-black/25 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />

              <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black z-20 shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
              <div className="absolute top-[13px] left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-black/95 z-20" />

              <div className="absolute inset-[18px] rounded-[2.05rem] overflow-hidden z-20 bg-[#f7f5f0] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                <div className="h-full w-full">
                  <img
                    src={imgError ? assets.echohero : frameSrc}
                    alt={`Echo onboarding frame ${currentFrame + 1}`}
                    className="h-full w-full object-contain object-top transition-opacity duration-500"
                    key={frameSrc}
                    onError={() => setImgError(true)}
                    onLoad={() => setImgError(false)}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(255,255,255,0.4),transparent_25%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.15),transparent_25%,transparent_75%,rgba(255,255,255,0.08))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_20%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_92%,rgba(0,0,0,0.05))]" />
                <div className="pointer-events-none absolute inset-x-4 top-3 h-6 rounded-full bg-white/8 blur-sm" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f7f5f0] via-[#f7f5f0]/95 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-[18px] rounded-[2.05rem] border border-black/5 z-30" />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden w-full max-w-6xl mt-12 mb-20">
        <div className="mb-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-white/60">
            Onboarding story
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
            An experience that adapts to every voice
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-white/75 max-w-2xl mx-auto">
            Scroll to move through Echo's onboarding. Each step is designed to feel calm,
            guided, and personal rather than busy or technical.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step) => (
            <article
              key={step.badge}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/60 shadow-sm overflow-hidden"
            >
              <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-white/60">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 text-primary">
                    {step.badge}
                  </span>
                  {step.title}
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-white/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="bg-[#f7f5f0] py-5 sm:py-6">
                <div className="relative mx-auto w-[180px] sm:w-[230px] aspect-[9/18.5] rounded-[2.4rem] bg-gradient-to-br from-[#f7f7f8] via-[#ececee] to-[#d9dade] p-[7px] shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
                  <div className="absolute inset-[7px] rounded-[2.1rem] bg-gradient-to-br from-[#1a1a1c] via-[#101013] to-[#232326] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-18px_30px_rgba(0,0,0,0.3)]" />
                  <div className="absolute inset-[9px] rounded-[1.95rem] border border-white/10" />
                  <div className="absolute top-[9px] left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-black z-20" />
                  <div className="absolute inset-[15px] rounded-[1.65rem] overflow-hidden bg-[#f7f5f0]">
                    <img
                      src={framePath(step.frame)}
                      alt={`${step.title} preview`}
                      className="h-full w-full object-contain object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/15" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full max-w-6xl mt-16 lg:mt-8 mb-12">
        <div className="flex justify-center">
          <div className="relative w-full rounded-[2.5rem] bg-gradient-to-br from-white via-white to-primary/5 dark:from-gray-900 dark:via-gray-900/80 dark:to-primary/5 border border-gray-200/60 dark:border-gray-700/50 p-8 md:p-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-400/10 blur-[60px]" />
            
            <div className="relative z-10">
              <span className="inline-block text-xs font-medium tracking-[0.2em] text-primary uppercase mb-3">Demo</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">
                See Echo in action
              </h2>
              <p className="text-base sm:text-lg mt-4 max-w-xl mx-auto text-gray-600 dark:text-white/70 leading-relaxed">
                Compare the same speaker before and after Echo — clarity improves while identity and intent are preserved.
              </p>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                <div className="group relative bg-white dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/60 rounded-2xl p-5 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Before Echo</h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-white/50 mb-4">Natural speech from a user with a pronounced stutter, before Echo is applied.</p>
                    <div className="rounded-xl overflow-hidden shadow-inner">
                      <iframe
                        title="Before Echo"
                        width="100%"
                        height="90"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={audioExamples.beforeEcho}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/60 rounded-2xl p-5 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">With Echo</h4>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-white/50 mb-4">The same user using Echo — message preserved and voice clarified.</p>
                    <div className="rounded-xl overflow-hidden shadow-inner">
                      <iframe
                        title="With Echo"
                        width="100%"
                        height="90"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={audioExamples.afterEcho}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/#contact-us"
                  className="inline-flex text-sm sm:text-base bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3.5 rounded-full hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                >
                  Try it yourself
                </a>
              </div>
              
              <p className="text-xs opacity-50 mt-6">Audio shared with informed consent for accessibility research.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EchoPage
