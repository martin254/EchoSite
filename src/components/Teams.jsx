import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
      
      <Title
        title="Meet the Team"
        desc="A multidisciplinary team combining AI, software engineering, and inclusive development to build technology that listens better."
      />

      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img
              src={team.image}
              className="w-12 h-12 rounded-full"
              alt={team.name}
            />

            <div className="flex-1">
              <h3 className="font-bold text-sm">
                <a
                  href={team.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-indigo-500 transition"
                >
                  {team.name}
                </a>
              </h3>

              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Teams
