'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanity/sanity'
import {motion} from 'framer-motion'
import Link from 'next/link'

const ProjectCard = ({project,index, isUnique=false}) => {
  //const loader = project.hero ? urlFor(project.hero).width(300).height(300).url() : "/"
  const loader = project.hero ? urlFor(project.hero).url() : "/"

  return (
      <Link className={'hover:scale-110 transition duration-700'} href={`/project/${project.slug.current}`}>

    <motion.div 
    className={`${isUnique ? 'projectCard2' : "projectCard"} flex flex-col opacity-0 gap-2 zigzag rounded-xl items-center z-0 justify-between p-4 `}
    initial={{y: "40%"}}
    whileInView={{ opacity:1 ,y:"0%"}}
    //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
    viewport={{ once: true }}
    transition={{ duration: 0.3,
    }}
    >
        <div className='relative w-full h-full imgWrapper '>  
        <Image fill src={loader} style={{objectFit:'cover'}}
        className='rounded border-2 border-[--color1] bg-current'
        />
        </div>

        <p className='text-xl font-rec1 bg-[--color1] rounded-lg p-2'>{project.title}</p>
    </motion.div>
    </Link>
  )
}

export default ProjectCard