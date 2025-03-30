import React from 'react'
import Hero from '@/app/component/Home/Hero'
import Project from '@/app/component/Project'
import About from '@/app/component/About'

const  page = async () => {


  return (
    <div className='h-[100dvh] w-[100vw] flex flex-col gap-4' >
        <Hero></Hero>

        <div className= 'w-full flex flex-col gap-4 sm:p-10 p-2'> 
            <Project/>
            <About/>
        </div>
    </div>
  )
}

export default page