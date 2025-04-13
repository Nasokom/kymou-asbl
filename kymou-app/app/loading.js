import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
        <Image height={300} width={300} src={'/LogoKymou.svg'} className='animate-spin'/>
    </div>
  )
}

export default loading