'use client'
import React from 'react'
import Image from 'next/image'
import { client } from '../app/utils/sanity/sanity'
import { useNextSanityImage } from 'next-sanity-image';

const CustomImage = ({className, height, width,img}) => {
    const imageProps = useNextSanityImage(client,img);

  return (
    <Image height={height} width={width} {...imageProps}/>
  )
}

export default CustomImage