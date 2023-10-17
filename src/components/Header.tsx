'use client'
import React, {useState}  from 'react'
import logo from '../assest/logo.png'
import Image from 'next/image'
import { navigation } from '@/constants/data'
import Link from 'next/link'
import { Menu,X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'


const Header = () => {
  const [show, setShow]=useState(false)
  const pathname = usePathname()
  const router = useRouter()
  return (
   <div className='w-full h-20 bg-background sticky top-0 z-50 px-4 xl:px-0'>
    <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between relative'>
        <Link href={"/"}>
        <Image src={logo} alt='logo Image' className='w-32'/>
        </Link>
        
           <ul className='hidden md:flex items-center justify-center gap-5 text-zinc-100'>
              {
                navigation.map((item)=>(
                  
                 <Link key={item.title} href={item.href} target={item.target}>
                   <li 
                 
                 className={`font-semibold uppercase text-sm cursor-pointer hover:text-orange-600 hover:bg-white hover:p-[6px]  duration-300 ${pathname === item.href && "bg-white text-orange-600 p-1"}`}>{item.title}</li>
                 </Link>
                  
                ))
              }
                
            </ul>
            <div onClick={()=>setShow(!show)} className='inline-flex text-white md:hidden '> {
              show ? <X/>:<Menu/>
            }
             </div>
             {
              show &&(
                <motion.ul 
                initial={{ opacity:0}}
                animate={{ opacity:1}}
                transition={{duration:1}}
                className='absolute right-0  py-6 top-20 flex flex-col md:hidden items-center justify-center gap-y-5  bg-zinc-50'>
                {
                  navigation.map((item)=>(
                    
                     <li key={item.title}
                     onClick={()=>{router.push(item.href), setShow(false)}}
                     className='font-semibold uppercase text-sm cursor-pointer mx-10 hover:bg-background hover:text-white hover:py-1 hover:mx-0 hover:px-10 duration-300'>{item.title}</li>
                    
                  ))
                }
                  
              </motion.ul>
              )
             }
            
        
    </div>
   </div>
  )
}

export default Header