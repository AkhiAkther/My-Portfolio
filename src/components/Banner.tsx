'use client'

import React from 'react'
import Container from './Container'
import Image from 'next/image'
import banner from '../assest/banner.png'
import {ArrowRight}  from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import { typing } from '@/constants/data'

const Banner = () => {
  
  return (
    <Container className=' bg-background/90 '>
         <div  className=' flex flex-col sm:flex-row text-white gap-5'>
         <div className='w-full sm:w-1/2  text-lg flex flex-col place-items-start pl-[100px]  gap-4 pt-10'>
        <p>Hello! </p>
        <h2 className='text-5xl font-serif '>I&apos;m <span className='text-orange-600'>Akhi</span></h2>
        {/* typewritter start here */}
        
       <div className='flex items-center gap-1 text-lg font-bold' >
        <p>I &apos;m a</p>
      <p className=''>
      <Typewriter
            words={typing}
            loop={5}
            cursor
            cursorStyle='!'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
            cursorBlinking
          />
      </p>
       </div>
        {/* typewritter end here */}
        <p className='tracking-wide'>I&apos;m a dedicated Full Stack Web Devloper with a passion for creating dynamic, user-friendly and effieient web applications</p>
      <a href='/resume.pdf' target='_blank' className='p-2 bg-orange-600 hover:bg-white hover:text-background flex duration-300'>
      <button >Hire Me</button>
        <ArrowRight/>
      </a>
      

         </div>
      <div className='w-full sm:w-1/2 flex  justify-center sm:justify-end'>
      <Image src={banner} alt='banner Image' className='w-3/4'/>
      </div>
     </div>
    
    </Container>
  )
}

export default Banner