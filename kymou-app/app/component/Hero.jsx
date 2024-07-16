import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/app/utils/sanity/sanity';
import { getIntro} from '@/app/utils/actions'

const  Hero = async () => {

    const datas = await getIntro()
    console.log(datas.logo)

    const text = datas.text || `" Lorsqu’on rêve tout seul ce n’est qu’un rêve alors que lorsque l’on rêve a plusieurs c’est déjà une réalité "`
    const textCredit = datas.textCredit || "Dom Helder Camara"

    const bgLoader = datas.image ? urlFor(datas.image).url() : "/dummy.jpg"
    const logoLoader = datas.logo ? urlFor(datas.logo)?.url() : '/img/LogoKymou.svg'

  return (
    <div className='h-[100vh] w-full flex relative'>
        <Image src={bgLoader} style={{objectFit:'cover', zIndex:0}} fill priority />

        <div className='z-10 flex flex-col items-center justify-between w-full h-full p-10'>

            <Image 
            //placeholder="blur"
            //quality={100}
            //blurDataURL={datas.logo.asset.metadata.lqip}
            src={logoLoader} 
            height={300} width={300} 
            style={{borderRadius:"50%", objectFit:'cover'}}
            className='bg-[#E6CF96]'
            />

            <div className='p-10 bg-2 rounded-lg relative overflow-hidden'>

                <div className='flex flex-col gap-4'>
                    <p className='text-3xl max-w-[600px] italic text-center font-display z-[1]'>
                        {text}
                    </p>
                     <p className='self-end font-display z-[1]'>{textCredit}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero