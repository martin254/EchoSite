import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Features from './components/Features'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster, toast} from 'react-hot-toast'
import Footer from './components/Footer'
import CBOOverview from "./components/CBOOverview"
import CBOFocusAreas from "./components/CBOFocusAreas"
import ISRIStructure from "./components/ISRIStructure"
import EchoPage from "./components/EchoPage"
import PilotProgramPage from "./components/PilotProgramPage"
import BlogPage from "./components/BlogPage"

const getFormServiceConfig = () => ({
  accessKey: globalThis.atob("YzY3ZTk5YjUtMzM2NS00ODY3LTkwYmQtNGRhOTUzM2YwNTEw"),
  endpoint: ["https://api.", "web3", "forms", ".com/submit"].join(""),
})

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  const [path, setPath] = useState(window.location.pathname)

  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const pendingHashRef = useRef(window.location.hash)

  //Refs for custom cursor Position Tracking
  const mouse = useRef({x:0, y:0})
  const position = useRef({x:0, y:0})

  useEffect(()=>{
    const handleMouseMove = (e)=>{
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)
    const animate = ()=>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x -20}px, ${position.current.y -20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return ()=> {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  const scrollToHash = (hash) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(hash.slice(1))
    if (target) {
      const navOffset = 96
      const top = target.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      pendingHashRef.current = window.location.hash
      setPath(window.location.pathname)
    }

    const handleInternalLinkClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const link = event.target.closest('a')
      if (!link || link.target || link.hasAttribute('download')) return

      const href = link.getAttribute('href')
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return

      const url = new URL(href, window.location.href)
      if (url.origin !== window.location.origin) return

      event.preventDefault()
      const nextPath = url.pathname
      const nextHash = url.hash
      pendingHashRef.current = nextHash
      window.history.pushState({}, '', `${nextPath}${nextHash}`)
      setPath(nextPath)

      if (nextPath === window.location.pathname) {
        window.requestAnimationFrame(() => scrollToHash(nextHash))
      }
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleInternalLinkClick)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleInternalLinkClick)
    }
  }, [])

  useEffect(() => {
    const hash = pendingHashRef.current
    const timeout = window.setTimeout(() => scrollToHash(hash), 80)
    return () => window.clearTimeout(timeout)
  }, [path])

  const isEchoPage = path === "/echo"
  const isPilotProgramPage = path === "/pilot-program"
  const isBlogPage = path === "/blog"

  const submitPilotApplication = async (formData) => {
    const { accessKey, endpoint } = getFormServiceConfig()
    formData.append("access_key", accessKey)
    formData.append("subject", "Echo Pilot Program Application")
    formData.append("from_name", "Echo Pilot Program")

    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
    })
    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message || "Something went wrong. Please try again.")
    }

    toast.success("Application received. We will follow up soon.")
  }
  
return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      {isEchoPage ? (
        <>
          <EchoPage />
          <ContactUs />
        </>
      ) : isPilotProgramPage ? (
        <PilotProgramPage onSubmitApplication={submitPilotApplication} />
      ) : isBlogPage ? (
        <BlogPage />
      ) : (
        <>
          <Hero />
          <ISRIStructure />
          <Partners theme={theme} />
          <CBOOverview />
          <CBOFocusAreas />
          <Features />
          <OurWork />
          <Teams />
          <ContactUs />
        </>
      )}
      <Footer theme={theme} />

      {/* Custom Cursor Ring*/}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}>

      </div>

      {/* Custom Cursor Dot*/}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'>

      </div>
    </div>
  )
}

export default App
