import React, { useRef, useState } from 'react'

const FeatureCard = ({ feature, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    if (divRef.current) {
      const bounds = divRef.current.getBoundingClientRect()
      setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
    }
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
        rounded-2xl
        border border-gray-200/60 dark:border-gray-700/50
        bg-white dark:bg-gray-900/40
        transition-all duration-500
        hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1
      "
    >
      <div
        className={`
          pointer-events-none blur-3xl rounded-full
          bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20
          w-[400px] h-[400px]
          absolute z-0 transition-opacity duration-700
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ top: position.y - 200, left: position.x - 200 }}
      />

      <div className="relative z-10 p-6 sm:p-7">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
            <span className="text-2xl font-semibold text-primary">{index + 1}</span>
          </div>
          <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
            {feature.title}
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white/70 leading-relaxed pl-16">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard