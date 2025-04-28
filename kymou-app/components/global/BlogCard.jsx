'use client'
import { urlFor } from '@/utils/sanity/sanity'
import Link from 'next/link'
import {motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import {dateFormat,readingTime} from '@/utils/function'
import { FaClock } from 'react-icons/fa6'
const BlogCard = ({data}) => {

    const loader =data.hero ? urlFor(data.hero.url).url() : ''


    const imageDesc = data.hero.title || data.hero.originalFilename
  return (
    <motion.div initial={{y:200,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{ once: true}}
        className='w-full h-fit'
    >

        <Link href={'/blog/'+data.slug.current} className='w-full flex gap-4 bg-[white] min-h-[30vw] min-h-fit rounded-xl  overflow-hidden'>

            <div className='relative w-full h-[100] min-h-[400px] max-w-[50%] w-[50%]'>
                <Image src={loader}  style={{objectFit:'cover'}} fill className='z-0' alt={imageDesc}/>
                <p className='absolute bottom-0 bg-[--color3] opacity-[0.7] w-full p-2 text-white'>{imageDesc} </p>
            </div>

            <div className='w-[50%] max-w-[50%] flex-auto flex min-h-full flex-col justify-center pt-4 p-2 gap-4'>
                    <div className='flex justify-center flex-col gap-4'>
                        <p className='text-[--color3]'> Par <span className='text-black'>{data.author.name}</span></p>
                        <p className='font-rec1 text-4xl'>{data.title}</p>
                        <p className='font-rec'>{data.description}</p>
                        <div className='text-[--color3] flex gap-4'>
                            <p className='flex gap-2'>{dateFormat(data._createdAt)} </p> |
                            <p className='flex items-center justify-center gap-1'>{readingTime(data.content)} min <FaClock/> </p>
                        </div>
                    </div>
                <div className='w-full flex items-end justify-end h-full'>
                    <button className='bg-[--color1] basis hover:bg-[--color3] hover:zigzagsm hover:text-white transition p-4 w-fit rounded-xl font-rec1'>Decouvrir</button>
                    
                </div>
            </div>
        </Link>
    </motion.div>
  )
}

export default BlogCard