'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TitleProject = () => {

  return (
    <Link href={'/project'} className={`group  w-full font-rec1 bg-[--color1] h-[25vh] ${usePathname()=='/project' ? 'fixed' :'absolute'} bg-[#ffffff4df]  border-b-4 border-[black] justify-between p-0 text-[5vw] top-0 overflow-hidden`}>
           
          {/* <p className='absolute bottom-0 p-0 leading-none'>NOS PROJETS</p>  */}
        <div className={`h-[5.5vw] overflow-hidden absolute bottom-0 z-[1002]`}>
              <div className={`${usePathname()=='/project' ? '' : 'translate-y-[-50%]' } duration-300 delay-700 `}>
                <p className={`${usePathname()=='/project' ? '' : "scale-x-[0.25] translate-x-[-37.3%]"} duration-300 ease-out h-5vw leading-none`}>
                    NOS PROJETS
                </p>
                <p href={'/project'} className={`${usePathname()=='/project' ? 'scale-x-[1] translate-x-0' :'scale-x-[0.25] translate-x-[-37.3%]'} duration-300 z-[103] leading-none group-hover:text-[--color2] `}>RETOUR</p>
              </div>
        </div>
    </Link>
  )
}

export default TitleProject