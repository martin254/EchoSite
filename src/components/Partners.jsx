import React from "react"
import { company_logos } from "../assets/assets"

const Partners = ({ theme }) => {
  const getLogoSrc = (item) => {
    if (!item) return ""
    if (typeof item === "string") return item
    return theme === "dark" ? item.dark : item.light
  }

  const getLogoAlt = (item) => {
    if (!item) return "Partner logo"
    if (typeof item === "string") return "Partner logo"
    return item.name || "Partner logo"
  }

  const logos = [...company_logos, ...company_logos]

  return (
    <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-16 text-gray-700 dark:text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] opacity-60">
          Our Partners
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-white/70">
          Working with institutions and communities to advance communication access.
        </p>
      </div>

      {/* Strip */}
      <div
  className="
    relative overflow-hidden
    rounded-3xl
    border border-gray-200/70 dark:border-white/10
    bg-white/60 dark:bg-white/5
    backdrop-blur-xl
    shadow-xl shadow-gray-100/70 dark:shadow-black/40
    py-10
    w-full
    max-w-3xl md:max-w-4xl lg:max-w-5xl
    mx-auto
  "
>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white/90 dark:from-black/60 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white/90 dark:from-black/60 to-transparent z-10" />

        {/* Moving track */}
        <div className="flex w-max items-center gap-14 sm:gap-20 marquee hover:[animation-play-state:paused]">
          {logos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[140px] sm:min-w-[180px]"
            >
              <img
                src={getLogoSrc(item)}
                alt={getLogoAlt(item)}
                draggable="false"
                className="
                  h-10 sm:h-12 md:h-14
                  object-contain
                  opacity-90
                  transition-transform duration-300
                  hover:scale-[1.04]
                "
              />
            </div>
          ))}
        </div>
      </div>

      

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Partners
