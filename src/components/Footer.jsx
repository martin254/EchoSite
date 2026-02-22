import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  return (
    <footer className="relative mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 pt-14 pb-8
      text-gray-700 dark:text-gray-200 overflow-hidden
      border-t border-gray-200/70 dark:border-white/10"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10
        bg-gradient-to-b
        from-slate-50 to-white
        dark:from-slate-950 dark:to-slate-900"
      />

      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px
        bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent
        dark:via-indigo-400/30"
      />

      {/* Top section */}
      <div className="flex justify-between max-lg:flex-col gap-12">
        {/* Left */}
        <div className="space-y-5 max-w-md">
          <img
            src={theme === 'dark' ? assets.sautilogo : assets.sautilight}
            className="w-36"
            alt="Sauti Yetu Initiative"
          />

          <p className="text-sm opacity-80">
            Inclusive communication, without barriers.
          </p>

          <p className="text-xs opacity-60">
            Building ethical, community-rooted assistive technology across Kenya.
          </p>

          <ul className="flex gap-6 text-sm pt-2">
            <li><a href="#hero" className="hover:text-primary transition">Home</a></li>
            <li><a href="#about-cbo" className="hover:text-primary transition">About Us</a></li>
            <li><a href="#our-work" className="hover:text-primary transition">Projects</a></li>
            <li><a href="#team" className="hover:text-primary transition">Team</a></li>
            <li><a href="#contact-us" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="max-w-md">
          <h3 className="font-semibold text-sm mb-2">
            Subscribe to our newsletter
          </h3>

          <p className="text-sm opacity-70 mb-5">
            Updates on projects, partnerships, and community research.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm rounded-xl
                bg-white/70 dark:bg-white/5
                border border-gray-300/70 dark:border-white/15
                outline-none focus:border-primary transition"
            />
            <button className="bg-primary hover:bg-primary/90 transition
              text-white text-sm px-6 py-3 rounded-xl">
              Subscribe
            </button>
          </div>

          <p className="text-xs opacity-50 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent dark:via-white/10" />

      {/* Bottom */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs opacity-60">
        <p>
          © 2026 Inclusive Speech Rights Initiative — All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/sauti-yetu-initiative/" className="hover:opacity-100 transition">
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5" />
          </a>
          <a href="#" className="hover:opacity-100 transition">
            <img src={assets.instagram_icon} alt="Instagram" className="w-5" />
          </a>
          <a href="#" className="hover:opacity-100 transition">
            <img src={assets.facebook_icon} alt="Facebook" className="w-5" />
          </a>
          <a href="#" className="hover:opacity-100 transition">
            <img src={assets.twitter_icon} alt="X" className="w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
