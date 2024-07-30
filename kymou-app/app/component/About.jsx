import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '@/app/utils/sanity/sanity'
import {getAbout} from '@/app/utils/actions'
import Title from './ux/Title'

const About = async () => {

    const lorem =`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aperiam ab doloribus atque impedit qui ducimus dolores dolorem dolorum 
            necessitatibus quas rerum soluta omnis deleniti quo nulla. Ipsam, fugiat doloribus!`

    const datas = await getAbout()
    const text1 =  datas.text1 || lorem
    const text2 =  datas.text2 || lorem
    const imgLoader = datas.image ? urlFor(datas.image).url() : '/dummy.jpg'


  return (
    <div className='w-full flex flex-col gap-10 items-center pt-10'>

        <Title>A propos de nous</Title>

        <div className='flex gap-10 justify-center items-center flex-wrap'>

            <p className='w-[40%] min-w-[300px] text-2xl'>{text1}</p>

            <Image src={imgLoader} width={300} height={300} className='bg-black'/>
        </div>

        <p className='text-2xl sm:text-3xl font-bold text-red-700 sm:text-center text-start'>{text2}</p>

        <div className='text-2xl sm:text-3xl p-10 bg-2 rounded-full pointer mt-20'>
            <Link className='font-display text-white' href='mailto:kymouASBL@gmail.com'>kymouASBL@gmail.com</Link>
        </div>

        <p className='text-4xl sm:text-8xl text-red-700 font-display'>Nous Soutenir</p>

        <div className='rounded-lg border-[15px] text-2xl sm:text-4xl border-red-700 p-10 flex flex-col jusify-center items-start'>
            <p>IBAN LU40 0099 7800 0052 1914 </p>
            <p>KYMOU ASBL</p>
            <p>CODE BIC / CCRA LULL</p>
        </div>
    </div>
  )
}

export default About