import React from 'react'
import { getGallery,getLqip } from '../utils/actions'
import GalleryImg from '../../components/GalleryImg'
import Title from '../../components/ux/Title'
import Image from 'next/image'
import { urlFor } from '../utils/sanity/sanity'
import PhotoCard from '@/components/gallery/PhotoCard'
import Gallery from '@/components/gallery/GalleryImg'

export default async function Page(){

  const lqips = await getLqip()
  const datas = await getGallery()
  

  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4 mt-[50px] items-center pt-0 p-2'>
      <h1 className={'font-rec2 text-9xl fixed'}>Gallerie</h1>

      <p className={'font-rec2 fixed top-[50vh] w-full text-center text-6xl'}>Scroll pour decouvrir la gallerie</p>

{/* 


        <div className='mt-[50vh] flex flex-wrap gap-4  justify-around items-center z-10 p-2'>

            {datas.map( async (data,i)=>{
              const loader = await urlFor(data.url).url()
              const odd = i%2
              if(i == 0 ){
                console.log(data)
              }
              return (
              <PhotoCard index={i} data={data}>

                  <div className={`w-[30vw] min-h-[33vw] transition relative translate-y-[${odd == 0 ?'-':''}${i*4}vh]`}>
                      <Image src={data.url} 
                          //width={400} height={300}
                          fill
                          blurDataURL={data.lqip} 
                          placeholder='blur'
                          style={{objectFit:'cover'}}
                          />

                 </div>
            </PhotoCard>

                
              ) 
            })}
        </div> */}
            <Gallery images={datas}/>
    </div>
  )
}
