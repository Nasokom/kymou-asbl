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
    <div className='min-h-[100dvh] w-[100vw] relative flex flex-col gap-4 mt-[50px] items-center pt-0 p-2'>
        <h1 className={'font-rec2 text-9xl fixed overflow-hidden pb-2'}>
          
          <div className='animate-[appearDown_0.3s_ease-out_forwards]'>
            Galerie
          </div>

        </h1>

      <h2 className={'font-rec2 fixed top-[50vh] w-full leading-none text-center text-6xl overflow-hidden '}>
        <div className='translate-y-[100%] animate-[translateUp_0.5s_ease-out_0.3s_forwards]'>
            Scroll pour decouvrir la galerie
        </div>
        </h2>

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
