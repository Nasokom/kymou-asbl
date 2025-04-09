'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Footer = () => {

    const links = [{name:'home',path:'/'},{name:'project',path:"/project"},{name:"gallery",path:'/gallery'},{name:'contact',path:'/contact'}]

  return (
    <div className='w-[95vw] mt-20 min-h-[40vh] p-20 pb-0 bottom-0 relative zigzag flex rounded-t-[50px]'>
        <div className='w-full bg-white relative rounded-t-[50px] p-8'>
                <div className='flex w-full justify-between flex-wrap'>
                    <div className=''>
                        <p className='font-rec1'>Navigation</p>
                        <ul className='font-rec'>
                        {links.map((link,i)=>{
                            return (
                            <li key={i}>
                                <Link  href={link.path} 
                            className={`
                                ${usePathname()== link.path ? "underline " : ''}
                                p-2 rounded
                                transition
                                text-sm
                                `}
                                >
                            {link.name}
                            </Link>
                             </li>)
                            })
                        }
                        </ul>

                    </div>
                <p className='font-rec1 text-8xl '>KYMOU</p>

                    <div className=''>
                    <p className='font-rec1'>Contactez nous</p>
                      <Link className='font-rec underline' href={'mailto:kymouasbl.gmail.com'}>kymouASBL@gmail.com</Link>
                    </div>


                </div>
        </div>
    </div>
  )
}

export default Footer