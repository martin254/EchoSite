import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import FeatureCard from './FeatureCard'

const Features = () => {
  const featuresData = [
    {
      title: '🎙️ Long-Form Voice Clarification',
      description:
        'Echo allows users with non-standard speech to record long voice messages without pressure. Our AI refines clarity while preserving the user’s identity, tone, and intent, producing both enhanced audio and an accurate transcript, without forcing users to slow down or change how they speak.',
      icon: assets.content_icon,
    },
    {
      title: '🧠 AI Trained on Real Non-Standard Speech',
      description:
        'Echo is powered by a Whisper-based model fine-tuned on real recordings from people with speech impairments, including non-standard Swahili and accented speech. This makes Echo far more accurate and respectful than traditional speech-recognition systems.',
      icon: assets.content_icon,
    },
    {
      title: '📍 Accessibility-Aware Place Discovery',
      description:
        'Echo helps users discover places using speech-accessibility signals like noise levels, staff helpfulness, crowding, and overall accessibility — empowering people to choose environments where they can speak comfortably and confidently.',
      icon: assets.content_icon,
    },
    {
      title: '🔗 Share Anywhere',
      description:
        'Enhanced audio and transcripts can be shared instantly to messaging apps, email, work tools, school platforms, or customer support. Echo acts as a bridge between users and the digital world they already use.',
      icon: assets.content_icon,
    },
  ]

  return (
    <div
      id="features"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="What is Echo?"
        desc="Echo is the core assistive speech technology that powers all of our projects — from survivor support to health, education, and safe spaces."
      />

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl items-stretch">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Audio Examples */}
      <div className="w-full max-w-6xl mt-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold">Hear Echo in action</h3>
          <p className="text-sm opacity-70 mt-2">
            Compare the same speaker before and after Echo — clarity improves while identity and intent are preserved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example A */}
          <div className="bg-white/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 shadow-xl shadow-gray-100 dark:shadow-white/5">
            <h4 className="font-semibold mb-2">Example A — Before Echo</h4>
            <p className="text-sm opacity-70 mb-4">
              Natural speech from a user with a pronounced stutter, before Echo is applied.
            </p>

            <div className="rounded-xl overflow-hidden">
              <iframe
                title="Echo Example A"
                width="100%"
                height="180"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2229996662&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
              />
            </div>
          </div>

          {/* Example B */}
          <div className="bg-white/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 shadow-xl shadow-gray-100 dark:shadow-white/5">
            <h4 className="font-semibold mb-2">Example B — With Echo</h4>
            <p className="text-sm opacity-70 mb-4">
              The same user using Echo — message preserved and voice clarified.
            </p>

            <div className="rounded-xl overflow-hidden">
              <iframe
                title="Echo Example B"
                width="100%"
                height="180"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2230010423&color=%235b5af7&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
              />
            </div>
          </div>
        </div>

        <p className="text-xs opacity-60 text-center mt-4">
          Audio shared with informed consent for accessibility research and demonstration purposes.
        </p>
      </div>
    </div>
  )
}

export default Features
