import React from 'react'
import Image from 'next/image'

const Title = ({children="Titre",classN=""}) => {
  return (
    // Old version
    // <div className={'relative overflow-hidden block flex text-center rounded-full w-full p-8 justify-center bg-1 '}>
    //     <h1 className={'text-5xl sm:text-6xl font-display '+classN} >{children}</h1>
    // </div>  

<div className={'relative flex text-center  w-full p-8 justify-center'}>
  <h1 className={'text-5xl sm:text-6xl '+classN} >{children}</h1>
</div>  
  )
}

export default Title