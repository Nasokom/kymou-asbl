'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TitleProject = ({url,title}) => {

  return (
    <>
    <Link href={url} className={`z-[3] group  w-full font-rec1 bg-[--bgColor1] h-[25vh] max-[600px]:h-[20vh] ${usePathname()== url ? 'fixed' :'absolute'} bg-[#ffffff4df]  border-b-4 border-[--txtColor1] justify-between p-0 text-[5vw] top-0 overflow-hidden`}>       
        <div className={`h-[5.5vw] overflow-hidden ${usePathname()== url? 'left-[50%] translate-x-[-50%] delay-[1000ms]' :'left-2 translate-x-[0%] '} transition-700 duration-300  absolute bottom-0 `}>
              <div className={` duration-300 delay-700  ${usePathname()== url ? 'delay-0 duration-100' : 'translate-y-[-50%]' }`}>
                <div className={`${usePathname()== url  ? '' : "scale-x-[0.25] translate-x-[-37.3%]"} duration-300 ease-out uppercase h-5vw leading-none`}>
                  {title}
                </div>
                <div  className={`${usePathname()== url  ? 'scale-x-[1] translate-x-0' :'scale-x-[0.25] translate-x-[-37.3%]'} duration-300 leading-none hover:text-[--color2]`}>RETOUR</div>
              </div>
        </div>
    </Link>
    </>
  )
}

export default TitleProject