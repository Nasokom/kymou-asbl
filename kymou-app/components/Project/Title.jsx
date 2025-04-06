'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TitleProject = () => {

  return (
    <Link  href={'/project'} className={'group z-100 w-full font-rec1 bg-[#ffffff4df] border-b-4 border-[black] max-h-24 justify-between p-0 text-8xl absolute top-0 overflow-hidden hover:zigzag'}>
           
              
        <div className={`${usePathname()=='/project' ? '' : 'translate-y-[-50%]' } absolute top-0 duration-300 delay-700`}>
                <p className={`${usePathname()=='/project' ? '' : "scale-x-[0.25] translate-x-[-37.3%]"} duration-300 ease-out`}>
                    NOS PROJETS
                </p>
                <p className={`${usePathname()=='/project' ? 'scale-x-[1] translate-x-0' :'scale-x-[0.25] translate-x-[-37.3%]'}  top-0 duration-300  group-hover:underline `}>RETOUR</p>
        </div>
        <p className='text-8xl opacity-0'>c</p>
    </Link>
  )
}

export default TitleProject