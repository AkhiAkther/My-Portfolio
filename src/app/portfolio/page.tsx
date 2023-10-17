import Container from '@/components/Container'
import Title from '@/components/Title'
import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { portfolio } from '@/constants/data'

const MyPortfolio = () => {
  return (
    <Container className='bg-background/90 text-white'>
        <Title title='My Portfolio' className='mx-10'></Title>
        <hr className='hrStyle mx-10' ></hr>
        <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
        {
          portfolio.map((item)=>(
            <Link key={item.title} href={item.href} target='_blank'>
            <div className='border border-zinc-100'>
               <Image src={item.img} alt='study lab image'
               
               />
               <p className='text-center font-bold'>{item.title}</p>
             </div>
            </Link>
          ))
        }
         
        </div>
    </Container>
  )
}

export default MyPortfolio