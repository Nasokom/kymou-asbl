'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/utils/sanity/sanity'
import {motion} from 'framer-motion'

const PhotoCard = ({children,index}) => {


    const isOdd = (index+1)%2

  return (
    <motion.div 
    className='rounded-xl'
    initial={{ opacity:0,scale:1,y: "40%"}}
    whileInView={{ opacity:1, scale: 1 ,y:"0%"}}
     //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
     viewport={{ once: true, amount:0.3}}
     transition={{ duration: 0.3, ease: "easeOut"}}
   
    > 
     {children}
    </motion.div>
  )
}

export default PhotoCard