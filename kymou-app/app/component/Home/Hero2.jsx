import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanity/sanity';
import { getIntro,getLqip,getHome} from '@/app/utils/actions'
import CustomPortableText from '../CustomPortableText';

const  Hero2 = async ({datas}) => {

    const lqips = await getLqip();


    const matchLqip = (ref) => {

        const match = lqips.find((elt) => elt._id == ref)

        return match ? match.metadata.lqip : null

    }

    //const logoLqip = matchLqip(datas.logo.asset._ref)
    const bgLqip = matchLqip(datas.image.asset._ref)

    const bgLoader = datas.image ? urlFor(datas.image).url() : "/dummy.jpg"

  return (
    <div className='min-h-[100vh] h-[100vh] w-full flex relative' style={{minHeight:"100vh"}}>


      <div className='w-full h-full bg-white absolute animeBg' >
        <Image
         src={bgLoader} 
          blurDataURL={bgLqip} 
          placeholder="blur"
          style={{objectFit:'cover', zIndex:0,}} quality={100} fill priority={true}
          className='bgheader' />
        </div>

        <div className='z-10 flex items-center leading-[10em] justify-center w-full h-full p-6 sm:p-10'>
               <div className='w-full bottom-20 p-8'>
                  <div className='text-5xl text-current font-bold' >
                    <div className='flex flex-col gap-8'>
                    <div className='overflow-hidden'>
                      <p className='qAnim2'>Lorsque l'on rêve seul, ce n'est qu'un rêve. </p>
                      </div>
                    <div className='overflow-hidden'>
                      <p className='qAnim2 delay-[1s]'>Lorsque nous rêvons ensemble, </p>
                      </div>
                    <div className='overflow-hidden'>
                      <p className='qAnim2 delay-[2s]'>c'est le commencement de la réalité</p>
                      </div>
                    </div>
                  </div>
                  <p className='text-xl mt-4 w-full text-right'>{datas.quote.credit}</p>
                </div>
        </div>

    </div>
  )
}

export default Hero2

