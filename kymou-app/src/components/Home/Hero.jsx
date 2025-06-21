import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';
//import { HOME_QUERYResult} from '@/sanity/types';
import CustomPortableText from '@/components/CustomPortableText';

const  Hero = (props) => {

  const {image, quote} = props;
  

    const bgLoader = image ? urlFor(image).url() : "/dummy.jpg"
  return (
    <div className='min-h-[100vh] items-center justify-around h-[100vh] w-full flex-col flex relative max-[800px]:p-2' style={{minHeight:"100vh"}}>

      <div className='absolute bottom-0 w-[90%] h-[90%] max-[800px]:w-[95vw]'>

      <Image 
        alt={image?.asset?.description}
        fill 
        placeholder='blur'
        blurDataURL={image?.asset?.metadata?.lqip}
        src={bgLoader}
        style={{objectFit:'cover', zIndex:0,transition:'10s'}} 
        quality={100}
        priority={true}
        className='animeBg1'
        />
        </div>

            <div className='overflow-hidden pb-2'>
              <h1 className='text-9xl  max-[800px]:text-[22vw] font-rec2 flex items-center animate-[appearDown_0.3s_ease-out_forwards]'>
                Kym
                <Image src={"/kymouLogo.svg"} alt='Logo de kymou' width={75} height={75} className='rounded-full logoSvg bg-[--color1] border-4 border-[--color2] p-1' />
                u  
                <span className='text-[--color3] text-xl max-[800px]:text-[5vw] ml-4 max-[800px]:ml-0 mt-[-50px]'>asbl</span>
                </h1>
            </div>
      <div className='overflow-hidden'>
        <div className='font-rec flex flex-col items-center w-[90vw] max-[800px]:w-[95vw] justify-center p-6  max-[800px]:p-2 sm:p-10 z-100'>
                <CustomPortableText className='text-center text-5xl max-[800px]:text-3xl text-current font-bold z-[10]' value={quote?.text}></CustomPortableText>   

               <div className='w-full overflow-hidden'>
                  <p className='text-xl max-[800px]:text-sm mt-4 w-full text-right translate-y-[100%] animate-[translateUp_0.5s_ease-out_0.5s_forwards]'>{quote?.credit}</p>
                </div>
        </div>
      </div>

    </div>
  )
}

export default Hero

