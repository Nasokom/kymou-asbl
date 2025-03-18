import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import {urlFor} from '@/app/utils/sanity/sanity'

const ImageModal = ({selectedImg,setSelectedImg, datas}) => {

    const [loader,setLoader] = useState('')




             useEffect(()=>{
                console.log(datas)
                 //setLoader(urlFor(datas[selectedImg]).url())
                 
            },[selectedImg])

  return (
    <div className='fixed w-[100vw] flex h-[100vh] border-solid border-2 z-10 top-0 l-0'>

        <div className='absolute top-5 right-5 bg-black h-10 w-10 rounded' onClick={()=>setSelectedImg(null)}>

        </div>
        
        <Image
        fill
        src={selectedImg}
         style={{objectFit:'cover'}}
         />

    </div>
  )
}

export default ImageModal