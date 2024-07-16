import React from 'react'
import Image from 'next/image'

const Title = ({children="Titre"}) => {
  return (
    <div className='relative overflow-hidden block flex rounded-full w-full p-8 justify-center bg-1'>
        {/* <Image fill src={'/motifCreme1.svg'} style={{objectFit:'cover'}} className='z-[0]'/> */}
        <h1 className='text-8xl font-display' >{children}</h1>
    </div>  
  )
}

export default Title