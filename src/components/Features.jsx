import React from 'react'
import Title from './Title'
import FeatureCard from './FeatureCard'

const Features = () => {
  const featuresData = [
    {
      title: 'Long-Form Voice Clarification',
      description:
        'Echo allows users with non-standard speech to record long voice messages without pressure. Our AI refines clarity while preserving the user\'s identity, tone, and intent, producing both enhanced audio and an accurate transcript, without forcing users to slow down or change how they speak.',
    },
    {
      title: 'AI Trained on Real Non-Standard Speech',
      description:
        'Echo is powered by a Whisper-based model fine-tuned on real recordings from people with speech impairments, including non-standard Swahili and accented speech. This makes Echo far more accurate and respectful than traditional speech-recognition systems.',
    },
    {
      title: 'Accessibility-Aware Place Discovery',
      description:
        'Echo helps users discover places using speech-accessibility signals like noise levels, staff helpfulness, crowding, and overall accessibility — empowering people to choose environments where they can speak comfortably and confidently.',
    },
    {
      title: 'Share Anywhere',
      description:
        'Enhanced audio and transcripts can be shared instantly to messaging apps, email, work tools, school platforms, or customer support. Echo acts as a bridge between users and the digital world they already use.',
    },
  ]

  return (
    <div
      id="features"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <div className="pointer-events-none absolute -top-10 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute top-40 -left-20 h-56 w-56 rounded-full bg-blue-400/10 blur-[60px]" />

      <Title
        title="What is Echo?"
        desc="Echo is the core assistive speech technology that powers all of our projects — from survivor support to health, education, and safe spaces."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl items-stretch">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Features