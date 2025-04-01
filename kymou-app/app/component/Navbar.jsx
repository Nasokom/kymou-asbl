'use client'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const links = [{name:'home',path:'/'},{name:'project',path:"/project"},{name:"gallery",path:'/gallery'},{name:'contact',path:'/contact'}]
  return (
    <div className='fixed w-full z-[100] bg-[white] top-0 left-0 p-4 flex justify-between'>

      <div className='flex gap-2'>
          <Link href={'/h1'} className='font-display justify-center gap-2 items-center flex text-2xl'>
          <Image 
            //blurDataURL={datas.logo.asset.metadata.lqip}
            src={'/logoKymou.svg'} 
            height={50} width={50} 
            />
            Kymou asbl
            </Link>
      </div>

        <div className='flex gap-4'>
        {links.map((link,i)=>{
            return <Link key={i} href={link.path} className={usePathname()==link.path ? " underline font-black" : ""}>{link.name}</Link>
        })}
        </div>


    </div>
  )
}

export default Navbar