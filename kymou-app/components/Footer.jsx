'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Image from 'next/image';

const Footer = () => {

    const links = [{name:'home',path:'/'},{name:'project',path:"/project"},{name:"gallery",path:'/gallery'},{name:'contact',path:'/contact'}]

  return (
    <div className='w-[95vw] mt-20 p-20 p-[6vw] h-fit pb-0 bottom-0 relative zigzag flex rounded-t-[50px]'>
        <div className='w-full bg-[--color1] relative rounded-t-[50px] p-8 pb-0'>


                <div className='flex w-full justify-around flex-wrap gap-4'>

                    <div className=''>
                        <p className='font-rec1 text-4xl text-center'>Navigation</p>
                        <ul className='font-rec flex flex-wrap'>
                        {links.map((link,i)=>{
                            return (
                                <li key={i}>
                                <Link  href={link.path} 
                            className={`
                                ${usePathname()== link.path ? "underline " : ''}
                                p-2 rounded
                                transition
                                text-2xl
                                `}
                                >
                            {link.name}
                            </Link>
                             </li>)
                            })
                        }
                        </ul>
                    </div>

                    <div className=''>
                    <p className='font-rec1 text-4xl'>Contactez nous</p>
                      <Link className='font-rec underline text-2xl' href={'mailto:kymouasbl.gmail.com'}>kymouASBL@gmail.com</Link>
                    </div>

                <p className='font-rec1 text-[8vw] text-center leading-none flex'>KYM 
                    <span className='relative w-[8vw] h-[8vw] hover:animate-spin'>
                    <Image src={"/kymouLogo.svg"} fill className='rounded-full logoSvg bg-[--color1] border-4 border-[--color2] p-1' />
                    </span>
                    U</p>
                <p className='w-full text-center text-xl mb-8'> 
                    <span className='zigzagsm p-4 rounded-xl text-white font-rec1'>
                    made by Nasoa 2025
                    </span>
                    </p>
                </div>


        </div>
    </div>
  )
}

export default Footer