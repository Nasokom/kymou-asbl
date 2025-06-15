'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

const ProjectCard = ({project,index, isUnique=false, className=''}) => {
  //const loader = project.hero ? urlFor(project.hero).width(300).height(300).url() : "/"
  const loader = project.hero ? urlFor(project.hero).url() : "/"

  return (
      <Link className={'hover:scale-110 relative transition duration-700 '+ className} href={`/project/${project.slug.current}`}>

    <motion.div 
    className={`${isUnique ? 'projectCard2' : "projectCard"} flex flex-col opacity-[0] gap-2 zigzag rounded-xl items-center justify-between p-4 `}
    initial={{opacity:0,y: "40%"

    }}
    whileInView={{ opacity:1 ,y:"0%"
      
    }}
    //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
    viewport={{ once: true}}
    //transition={{ duration: 0.3,}}
    >
        <div className='relative w-full h-full imgWrapper overflow-hidden'>  
        <Image fill src={loader} style={{objectFit:'cover'}}
        alt={project.hero.asset.altText || project.hero.asset.description || project.hero.asset.originalFilename}
        className='rounded border-2 border-[--color1] bg-current'
        />
        </div>

        <p className='text-xl font-rec1 bg-[--color1] rounded-lg p-2'>{project.title}</p>

    </motion.div>
    </Link>
  )
}

export default ProjectCard