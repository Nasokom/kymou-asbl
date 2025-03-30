'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {urlFor} from '@/app/utils/sanity/sanity'
import {getProject, getLqip} from '@/app/utils/actions'
import ImageModal from './ImageModal'


const GalleryImg = ({datas,lqips}) => {

  const matchLqip = (ref) => {

    const match =  lqips.find((elt) => elt._id == ref) 

    return match ? match.metadata.lqip : null

}

    const [selectImg,setSelectedImg] = useState(null)

  return (
    <>

  {
    selectImg && <ImageModal datas={datas} selectImg={selectImg} setSelectedImg={setSelectedImg}></ImageModal>}

   {datas &&
   datas.map((image,i)=>{

                        const lqip = matchLqip(image.asset._ref) 
                        const loader = urlFor(image).url()
                        return(
                        <Image 
                        onClick={()=>setSelectedImg({url:loader})}
                        src={loader}
                        width={300}
                        placeholder={lqip}
                        height={300}
                        style={{objectFit:'cover'}}
                        className={'relative rounded-lg w-[48.5%] sm:w-[32%] h-[25.1vw]'}
                        key={i+image.asset._ref}/>
                        
                        )
                    })
      }

    </>
  )
}

export default GalleryImg