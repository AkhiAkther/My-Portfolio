'use client'

import React from 'react'
import Container from './Container'
import Title from './Title'
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
   <motion.section 
   id='aboutme'
   initial={{y:60, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{duration:1}}
   viewport={{once:true}}
   >
    <Container className='bg-zinc-100   px-10'>
        <Title title='About Me' ></Title>
        <hr className='hrStyle'></hr>
        <p>i&apos;m a  web developer and i am creating dynamic and interactive web applications.I hold a degree in Computer Technology and have 1 year of expreience working in web development.My skills span a wide range, from front-end technologies like HTML, CSS and Javascript to back-end frameworks such as React.js , Next.js. I&apos;m also well versed in database management,API integration.My approach to web development involves a strong emphasis on user experience, clean code, and staying up-to-date with the latest industry trends. I&apos;m also a proponent of Agile development methodologies.</p>
        <p>Outside of coding ,I enjoy reading books and travelling.I&apos;m excited to take on new challenges and collaborate with like-minded individuals. Feel free to explore my portfolio, connect with me on LinkedIn, or reach out to discuss potential opportunities. </p>
        
    </Container>
   </motion.section>
  )
}

export default AboutMe