'use client'

import React from 'react'
import Container from './Container'
import Title from './Title'
import { serviceDetails } from '@/constants/data'
import {motion} from 'framer-motion'

const MyServices = () => {
  return (
   <motion.section id='myservices'
   initial={{y:60, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{duration:1}}
   viewport={{once:true}}
   >
    <Container className= ' bg-zinc-100  px-5 mt-10'>
            <Title title='My Services'></Title>
            <hr className='hrStyle'></hr>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10 px-4' >
              {
                serviceDetails.map((item)=>(
                  
                  <div key={item.title} className='border border-lime-900 bg-[#0f250f] text-zinc-100 hover:bg-white hover:text-black duration-200 p-5 shadow-2xl shadow-zinc-500 hover:shadow-none'>
                      <div className='flex items-center gap-2 mb-4'>
                      <p className='text-orange-600'>{<item.icon/>}</p>
                      <p className='text-lg font-bold'>{item.title}</p>
                    </div>
                    <p>{item.description}</p>
                  </div>
                   
                  
                ))
              }
            </div>
    </Container>
   </motion.section>
  )
}

export default MyServices