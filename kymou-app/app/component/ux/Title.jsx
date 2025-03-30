import React from 'react'
import Image from 'next/image'

const Title = ({children="Titre",classN=""}) => {
  return (
    <div className={'relative overflow-hidden block flex text-center rounded-full w-full p-8 justify-center bg-1 '}>
        {/* <Image fill src={'/motifCreme1.svg'} style={{objectFit:'cover'}} className='z-[0]'/> */}
        <h1 className={'text-5xl sm:text-6xl font-display '+classN} >{children}</h1>
    </div>  
  )
}

export default Title