import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title : 'Nena : Assistive communication for survivors',
            description : 'An assistive communication tool that enables survivors of sexual violence with speech impairments to safely record their experiences, generate accurate transcripts, and share them with trusted support systems — without the pressure of real-time verbal disclosure.',
            image : assets.Nena
        },
         {
            title : 'Lulu : Voice-first women’s health companion',
            description : 'An AI-powered, voice-first health companion supporting women with speech impairments across menstrual and reproductive health journeys through accessible, culturally relevant, and stigma-free voice interactions.',
            image : assets.Lulu
        },
         {
            title : 'Safe Spaces : Accessibility-aware location discovery',
            description : 'An accessibility-first discovery feature that helps people with speech impairments identify supportive, disability-friendly spaces using community-driven ratings focused on communication and interaction needs.',
            image : assets.safespace
        },
         {
            title : 'Simulizi : Inclusive oral storytelling for education',
            description : 'An AI-powered storytelling platform that allows students with speech impairments to record stories in their own voices, transforming speech into coherent narratives while preserving emotion, identity, and creativity.',
            image : assets.simulizi
        },
    ]

  return (
    <div id = 'our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our Latest Projects' desc='Technology built with communities, designed for dignity, access, and real-world impact.' />

    <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=> (
                <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt='' />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description} </p>
                </div>
            ))
        }
    </div>

    </div>
  )
}

export default OurWork