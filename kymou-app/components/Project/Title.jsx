'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TitleProject = () => {

  return (
    <>
    <Link href={'/project'} className={`z-[3] group  w-full font-rec1 bg-[--color1] h-[25vh] max-[600px]:h-[20vh] ${usePathname()=='/project' ? 'fixed' :'absolute'} bg-[#ffffff4df]  border-b-4 border-[black] justify-between p-0 text-[5vw] top-0 overflow-hidden`}>       
          {/* <p className='absolute bottom-0 p-0 leading-none'>NOS PROJETS</p>  */}
        <div className={`h-[5.5vw] overflow-hidden ${usePathname()=='/project' ? 'left-[50%] translate-x-[-50%] delay-[1000ms]' :'left-2 translate-x-[0%] '} transition-700 duration-300  absolute bottom-0 `}>
              <div className={` duration-300 delay-700  ${usePathname()=='/project' ? 'delay-0 duration-100' : 'translate-y-[-50%]' }`}>
                <p className={`${usePathname()=='/project' ? '' : "scale-x-[0.25] translate-x-[-37.3%]"} duration-300 ease-out h-5vw leading-none`}>
                    NOS PROJETS
                </p>
                <p href={'/project'} className={`${usePathname()=='/project' ? 'scale-x-[1] translate-x-0' :'scale-x-[0.25] translate-x-[-37.3%]'} duration-300 leading-none hover:text-[--color2]`}>RETOUR</p>
              </div>
        </div>
    </Link>
    </>
  )
}

export default TitleProject