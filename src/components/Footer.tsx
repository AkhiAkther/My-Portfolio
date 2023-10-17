import React from 'react'
import Image from 'next/image'
import logo from '../assest/logo.png'
import { navigation, social } from '@/constants/data'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='w-full bg-background text-zinc-100 flex flex-col  items-center justify-center gap-5 mt-10 '>
        <div>
         <Image src={logo} alt='logo Image' className='w-32'/>
         <p>MERN Stack Devloper</p>
        </div>
        <div>
        <ul className=' md:flex items-center justify-center gap-5 text-zinc-100'>
              {
                navigation.map((item)=>(
                  <Link key={item.title} href={item.href} className='flex items-center justify-center gap-4' target='_blank'>
                   <li className=' py-2  sm:font-semibold uppercase text-sm cursor-pointer hover:text-lime-700  duration-300'>{item.title}
                  
                   </li>
                 <hr className='sm:w-[2px] h-4 bg-white '></hr>
                  </Link>
                ))
              }
                
            </ul>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='underline underline-offset-4 decoration-1'>Reach with me</p>
            <div className=' flex gap-4'>
            {
                social.map((item)=>(
                  <Link key={item.title} href={item.href} className='flex flex-col items-center justify-center gap-2'>
                    <ul><li className='bg-white text-background p-1 '>{<item.icon/>}</li></ul>
                    <p>{item.title}</p>
                  </Link>
                 
                ))
              }
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer