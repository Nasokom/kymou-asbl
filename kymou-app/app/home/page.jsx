import React from 'react'
import Hero from '../component/Hero'
import Project from '../component/Project'
import About from '../component/About'

const page = () => {
  return (
    <div className='h-[100dvh] w-[100vw] flex flex-col gap-4' >
        <Hero></Hero>
        
        <div className= 'w-full flex flex-col gap-4 p-10'> 
            <Project/>
            <About/>
        </div>
    </div>
  )
}

export default page