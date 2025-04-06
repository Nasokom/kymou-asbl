'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanity/sanity'
import {motion} from 'framer-motion'

const ProjectCard = ({project,index}) => {
  const loader = project.hero ? urlFor(project.hero).width(300).height(300).url() : "/"
  return (
    <motion.div 
    className='flex flex-col gap-2 zigzag rounded-xl items-center justify-between p-4'
    initial={{ opacity:0,scale:1,y: "40%"}}
    whileInView={{ opacity:1, scale: 1 ,y:"0%"}}
     //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
     viewport={{ once: true }}
     transition={{ duration: 0.5, ease: "easeOut", delay: `0.${3+index}`
      }}
   
    >
        
        <Image width={300} height={300} src={loader} style={{objectFit:'cover'}}
        className='rounded border-2 border-[white] bg-current'
        />
        <p className='text-xl font-rec1 bg-[white] p-2'>{project.title}</p>
    </motion.div>
  )
}

export default ProjectCard