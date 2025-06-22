 'use client'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import {readingTime} from '@/utils/fonction'
import { FaClock } from 'react-icons/fa6'
import { POSTS_QUERYResult} from "@/sanity/types";
import { PublishedAt } from './PublishedAt'

const BlogCard = ({data,className}:{data:POSTS_QUERYResult[number],className?:string}) => {

    const loader = data?.hero ? urlFor(data.hero).url() : null

    const imageDesc = data?.hero?.asset?.credit || data?.hero?.asset?.title || data?.hero?.asset?.originalFilename || ''

  return (
    <motion.div 
        initial={{y:200,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{ once: true, margin:'200px'}}
        className={`w-full h-fit flex `+className}
    >
        <Link href={'/blog/'+data?.slug?.current}
         className={'max-[800px]:flex-col w-full flex items-center justify-center gap-4 bg-[--bgColor2] min-h-[400px] rounded-xl overflow-hidden '}>

            <div className='relative w-full h-full min-h-[400px] grow min-[800px]:w-[50%]'>
                {loader && <Image src={loader}  
                fill
                style={{objectFit:'cover'}} 
                // className='z-0' 
                alt={imageDesc}
                />}
                <p className='absolute bottom-0 bg-[--color3] opacity-[0.7] w-full p-2 text-white'>{imageDesc} </p>
            </div>

            <div className='min-[800px]:w-[50%] flex flex-col justify-center pt-4 p-2 gap-4'>

                    <div className='flex justify-center flex-col gap-4'>
                        <p className='text-[--txtColor3]'> Par <span className='text-[--txtColor1]'>{data?.author?.name}</span></p>
                        <p className='font-rec1 text-4xl'>{data?.title}</p>
                        <p className='font-rec'>{data?.description}</p>
                        <div className='text-[--txtColor3] flex gap-4'>
                            <PublishedAt className='flex gap-2' publishedAt={data?._createdAt}/>                          |
                            <p className='flex items-center justify-center gap-1'>{readingTime(data?.content)} min <FaClock/> </p>
                        </div>
                    </div>

                <div className='w-full flex items-end justify-end h-full'>
                    <button className='bg-[--bgColor1] basis hover:bg-[--color3] hover:zigzagsm transition p-4 w-fit rounded-xl font-rec1'>Decouvrir</button>
                </div>
            </div>
        </Link>
    </motion.div>
  )
}

export default BlogCard