import React, { useRef, useState } from 'react'

const FeatureCard = ({ feature }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="
        relative overflow-hidden
        w-full h-full
        rounded-xl
        border border-gray-200 dark:border-amber-700/60
        shadow-2xl shadow-gray-100 dark:shadow-white/10
        bg-white dark:bg-gray-900
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* glow */}
      <div
        className={`
          pointer-events-none blur-2xl rounded-full
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
          w-[320px] h-[320px]
          absolute z-0 transition-opacity duration-500
          mix-blend-lighten
          ${visible ? 'opacity-70' : 'opacity-0'}
        `}
        style={{ top: position.y - 160, left: position.x - 160 }}
      />

      {/* content */}
      <div className="relative z-10 flex items-start gap-6 p-8">
        <div className="shrink-0 rounded-full bg-gray-100 dark:bg-gray-700 p-2">
          <img
            src={feature.icon}
            alt=""
            className="w-14 h-14 rounded-full bg-white dark:bg-gray-900"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-base sm:text-lg leading-snug">
            {feature.title}
          </h3>
          <p className="text-sm mt-2 opacity-70 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
