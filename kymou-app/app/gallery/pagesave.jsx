import React from 'react'
import { getGallery,getLqip } from '../utils/actions'
import GalleryImg from '../../components/GalleryImg'
import Title from '../../components/ux/Title'

export default async function Page(){

  const datas = await getGallery()
  const lqips = await getLqip()

  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4 mt-[50px] items-center p-10 pt-0'>

        <Title className={''}>gallery</Title>
        <div className='flex flex-wrap justify-start p-2 sm:p-4 items-start gap-4 bg-2 w-full min-h-[50vh] rounded-lg relative'>

        <div className='flex flex-wrap justify-center w-full p-2 sm:p-4 items-center gap-2 sm:gap-4 w-full min-h-[50vh] rounded-lg bg-white '>
        <GalleryImg datas={datas} lqips={lqips}/>
        </div>
        </div>
    </div>
  )
}
