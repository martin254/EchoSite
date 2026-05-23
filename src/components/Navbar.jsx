import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

    const Navbar = ({theme, setTheme}) => {
        const [sidebarOpen, setSidebarOpen] = useState(false)

        return (
            <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-50 backdrop-blur-2xl font-medium bg-white/30 dark:bg-gray-900/40 border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg shadow-black/5'>
                <img src={theme === 'dark' ? assets.sautilogo : assets.sautilight } className='w-32 sm:w-40 transition-all duration-300 hover:scale-105' alt=''/>

                <div className={`text-gray-700 dark:text-gray-100 sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-72 max-sm:pl-16'} max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-gradient-to-b max-sm:from-primary/95 max-sm:via-primary/90 max-sm:to-primary/85 max-sm:text-white max-sm:pt-28 max-sm:pb-10 max-sm:backdrop-blur-2xl max-sm:shadow-2xl max-sm:shadow-black/40 flex sm:items-center gap-5 transition-all duration-500 ease-in-out`}>

                    <img src={assets.close_icon} alt='' className='w-6 h-6 absolute right-5 top-6 sm:hidden opacity-70 hover:opacity-100 transition-opacity' onClick={()=> setSidebarOpen(false)}/>
                    <a onClick={()=>setSidebarOpen(false)} href='/' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Home</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/echo' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Echo</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/blog' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Blog</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/pilot-program' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Pilot Program</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/#about-cbo' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>About</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/#our-work' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Our Projects</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/#team' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Team</a>
                    <a onClick={()=>setSidebarOpen(false)} href='/#contact-us' className='sm:hover:border-b hover:translate-x-2 transition-all duration-300 py-2'>Contact Us</a>

                    <div className='max-sm:hidden'/>
                </div>

                <div className='flex items-center gap-2 sm:gap-4'>
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                    <img src={theme === 'dark'? assets.menu_icon_dark : assets.menu_icon} alt='' onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer transition-all duration-300 hover:scale-110'/>
                    <a href='/pilot-program' className='text-sm max-sm:hidden flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2.5 rounded-full cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300'>
                        Join Pilot <img src={assets.arrow_icon} width={14} alt=''/>
                    </a>
                </div>
            </div>
        )
    }

export default Navbar
