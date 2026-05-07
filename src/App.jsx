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
import EchoPage from "./components/EchoPage"
import PilotProgramPage from "./components/PilotProgramPage"

const getFormServiceConfig = () => ({
  accessKey: globalThis.atob("YzY3ZTk5YjUtMzM2NS00ODY3LTkwYmQtNGRhOTUzM2YwNTEw"),
  endpoint: ["https://api.", "web3", "forms", ".com/submit"].join(""),
})

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  const [path, setPath] = useState(window.location.pathname)

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

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

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const isEchoPage = path === "/echo"
  const isPilotProgramPage = path === "/pilot-program"

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
      ) : (
        <>
          <Hero />
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
