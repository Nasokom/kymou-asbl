  import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanity/sanity';
import { getIntro,getLqip,getHome} from '@/app/utils/actions'
import CustomPortableText from '../CustomPortableText';
import LineWrapper from '../lineWrapper';

const  Hero = async ({datas}) => {

    const lqips = await getLqip();

    const matchLqip = (ref) => {
        const match = lqips.find((elt) => elt._id == ref)
        return match ? match.metadata.lqip : null
    }

    //const logoLqip = matchLqip(datas.logo.asset._ref)
    const bgLqip = matchLqip(datas.image.asset._ref)

    const bgLoader = datas.image ? urlFor(datas.image).url() : "/dummy.jpg"

  return (
    <div className='min-h-[100vh] items-center justify-around h-[100vh] w-full flex-col flex relative' style={{minHeight:"100vh"}}>

      <div className='absolute bottom-0 w-[90%] h-[90%]'>

      <Image 
        fill 
        src={bgLoader}
        blurDataURL={bgLqip} 
        placeholder="blur"
        style={{objectFit:'cover', zIndex:0,transition:'10s'}} 
        quality={100}
        priority={true}
        className='animeBg1'
        />
        </div>

            <div className='overflow-hidden pb-2'>
              <h1 className='text-9xl font-rec2 flex items-center animate-[appearDown_0.3s_ease-out_forwards]'>
                Kym
                <Image src={"/LogoKymou.svg"} width={75} height={75}/>
                u  
                <span className='text-xl ml-4'>asbl</span>
                </h1>
            </div>
      <div className='overflow-hidden'>
        <div className='font-rec flex flex-col items-center justify-center w-full p-6 sm:p-10 z-100'>
                <CustomPortableText className='text-5xl text-current font-bold z-[10]' value={datas.quote.text}></CustomPortableText>   
               <div className='w-full overflow-hidden'>
                  <p className='text-xl mt-4 w-full text-right translate-y-[100%] animate-[translateUp_0.5s_ease-out_0.5s_forwards]'>{datas.quote.credit}</p>
                </div>
        </div>
      </div>

    </div>
  )
}

export default Hero

