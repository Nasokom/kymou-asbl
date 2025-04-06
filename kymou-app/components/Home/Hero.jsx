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
    <div className='min-h-[100vh] h-[100vh] w-full flex relative' style={{minHeight:"100vh"}}>

      <div className='loader w-[100vw] h-[100vh] flex items-center justify-center absolute'>
          <Image
          src={'/LogoKymou.svg'}
          width={400}
          height={400}
          style={{objectFit:'contain'}}
          />
      </div>

      <div className='w-full h-full bg-white absolute animeBg' >
        <Image
         src={bgLoader} 
          blurDataURL={bgLqip} 
          placeholder="blur"
          style={{objectFit:'cover', zIndex:0,}} quality={100} fill priority={true}
          className='bgheader' />
        </div>

                <LineWrapper>
                  <CustomPortableText className='text-4xl text-current font-bold' value={datas.quote.text}></CustomPortableText>
                </LineWrapper>
        <div className='quoteAnim z-10 flex items-center justify-center w-full h-full p-6 sm:p-10'>
               <div className='w-full absolute bottom-20 p-8'>
                  <p className='text-xl mt-4 w-full text-right'>{datas.quote.credit}</p>
                </div>
        </div>

    </div>
  )
}

export default Hero

