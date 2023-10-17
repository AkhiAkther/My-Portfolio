import React from 'react'
import Container from './Container'
import Title from './Title'

const Contact = () => {
  return (
    <Container className='bg-zinc-100 flex flex-col items-center justify-center'>
        <Title title="My Contact"></Title>
        <hr className='hrStyle'></hr>
        <div className=' flex flex-col  justify-center gap-3 bg-background text-zinc-100 w-[500px] auto p-10'>
        
      
       <p className=''>Name  </p>
       <input type='text' placeholder='Enter your Name' className='p-3 text-black'/>
       <p>Email</p>
         <input type='email' placeholder='Enter your email' className='p-3 text-black'/>
        <p className=''>Phone</p>
        <input type='number' placeholder='Enter your number' className='p-3  text-black '/>
         <p>massage</p>
         <textarea className='w-46 h-36 text-black'></textarea>

         
        
        <button className='bg-orange-600 p-2 w-full hover:bg-white hover:text-black duration-200'>Send Massage</button>
        
        
        </div>
    </Container>
  )
}

export default Contact