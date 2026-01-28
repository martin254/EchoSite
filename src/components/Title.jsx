import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-5xl font-medium">
        {title}
      </h2>

      {/* Accent line */}
      <div className="mt-3 mb-4 h-1 w-16 rounded-full bg-indigo-500" />

      <p className="max-w-lg text-gray-500 dark:text-white/75">
        {desc}
      </p>
    </div>
  )
}

export default Title
