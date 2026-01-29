import React, { useRef, useState } from "react"
import Title from "./Title"
import { teamData } from "../assets/assets"

const Teams = () => {
  const Card = ({ member }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const onMove = (e) => {
      const bounds = ref.current.getBoundingClientRect()
      setPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }

    return (
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 shadow-sm hover:shadow-xl transition-all duration-500"
      >
        {/* Hover glow */}
        <div
          className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[260px] h-[260px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
            hovered ? "opacity-60" : "opacity-0"
          }`}
          style={{ top: pos.y - 130, left: pos.x - 130 }}
        />

        <div className="relative z-10 p-6 flex items-center gap-5">
          {/* Avatar */}
          <div className="shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors truncate block"
            >
              {member.name}
            </a>

            <div className="mt-1 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-1">
              <span className="text-xs text-gray-600 dark:text-white/75">
                {member.title}
              </span>
            </div>
          </div>

          {/* LinkedIn button */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 hover:scale-[1.05] transition"
            aria-label={`Open ${member.name} on LinkedIn`}
            title="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-700 dark:text-white/80"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7.98h-4V24zM8.5 7.98h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.78V24h-4V7.98z" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      id="team"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the Team"
        desc="A multidisciplinary team combining AI, software engineering, and inclusive development to build technology that listens better."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {teamData.map((member, index) => (
          <Card key={index} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Teams
