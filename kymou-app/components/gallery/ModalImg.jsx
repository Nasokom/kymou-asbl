'use client'
import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight,FaInfoCircle  } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {urlFor} from '@/app/utils/sanity/sanity'
import Link from 'next/link';

const ModalImg = ({selectedImg,setSelectedImg, datas}) => {

  const dLength = datas.length -1

  const [isInfo,setIsInfo] = useState(false)

  function changeimg(dir){
    setIsInfo(false)
            if(dir == "+" ){
            const i = selectedImg+1
            if(i > dLength){
                setSelectedImg(0)
                return
            }
            setSelectedImg(i)
            } 
            if(dir == "-" ){
            const i = selectedImg-1
            if(i < 0){
                setSelectedImg(dLength)
                return
            }
            setSelectedImg(i)
            }
  }

    useEffect(()=>{
    },[selectedImg])

  return (
    <div className='fixed w-[100vw] flex h-[100vh] left-0 flex items-center justify-center border-solid border-2 z-[1002] top-0 l-0 backdrop-blur-xl ' style={{backdropFilter:'blur(15px)'}} >

        <div className=' p-4 rounded-lg'>

            <div className='w-[90vw] z-1 h-[90vh] relative overflow-hidden flex justify-center items-center cursor-default'>
                <Image
                        fill
                    placeholder={datas[selectedImg].lqip ? datas[selectedImg].lqip : 'empty'}
                    style={{objectFit:'contain'}}
                    className='rounded-lg'
                    src={datas[selectedImg].url}
                />
            </div>

        </div>

        <div className='fixed z-[1000] cursor-pointer top-4 right-4 bg-black flex justify-center items-center h-[50px] w-[50px] rounded-lg' onClick={()=>{
          setSelectedImg(null)}}>
            <ImCross className='fill-[white]'/>
        </div>

        {/* 4 multiple img in gallery */}

{    datas.length > 2 &&   <>
                <div className={' p-4 absolute z-1000 text-4xl fill-[#ffffff] text-[#fffff] w-full flex justify-between'}>
                <FaArrowLeft onClick={()=>changeimg('-')} className='cursor-pointer'/>
                <FaArrowRight onClick={()=>changeimg('+')} className='cursor-pointer'/>
                </div>

                {datas[selectedImg]
                //.title
                &&

                <div className='absolute top-2 left-2 font-rec1 z-[1000]'>

                        <FaInfoCircle  onClick={()=>setIsInfo(!isInfo)}className='cursor-pointer absolute w-[50px] h-[50px] top-1 left-1 z-1'/>
                  { isInfo && 
                      <div className='bg-white w-[450px]  pl-16 pr-16  pb-10 p-4 rounded-xl text flex flex-col gap-4 cursor-default'> 
                            <h2 className='text-2xl underline'>{datas[selectedImg].title || 'fake title'}</h2>
                            {datas[selectedImg].description && <p className='font-rec'>{datas[selectedImg].description}</p>}
                           {
                            datas[selectedImg].reference && 
                               <div className='flex flex-col gap-2'>
                                <p className='text-[orange] font-rec'>Decouvrir le projet en lien avec cette photo</p>
                                <Link className={'cursor-pointer border-2  zigzagsm rounded-xl text-center'} href={'/project/'+datas[selectedImg].reference.slug.current}>
                                <p className='bg-[#ffffff] rounded-xl p-2 text-2xl opacity-[0.8] text-black'>
                                    {datas[selectedImg].reference.title}
                                </p> 
                                </Link>
                            </div>
                            }

                    </div>
                    } 
                </div>
                }
            </>
          }

    </div>
  )
}

export default ModalImg