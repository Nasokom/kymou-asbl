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
    const newimg = datas.map(d => {
      return {
        ...d,
        src:  urlFor(d.image).url(),
        lqip: matchLqip(d.image.asset._ref) 
      }  
    })
    console.log(newimg)
  return (
    <>


   {datas &&
   newimg.map((data,i)=>{

                        return(
                        <Image 
                        onClick={()=>setSelectedImg({...data,index:i})}
                        //onClick={()=>setSelectedImg(image)}
                        src={data.src}
                        width={300}
                        placeholder={data.lqip}
                        height={300}
                        style={{objectFit:'cover'}}
                        className={'cursor-pointer relative rounded-lg w-[48.5%] sm:w-[32%] h-[25.1vw]'}
                        key={i}/>
                        
                        )
                    })
      }

{selectImg && <ImageModal datas={newimg} selectedImg={selectImg} setSelectedImg={setSelectedImg}></ImageModal>}

    </>
  )
}

export default GalleryImg