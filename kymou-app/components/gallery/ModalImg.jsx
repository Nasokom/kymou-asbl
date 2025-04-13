'use client'
import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight,FaInfo  } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from 'next/link';

const ModalImg = ({selectedImg,setSelectedImg, datas,setToggle}) => {

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
      document.documentElement.style.overflow = "hidden";

      document.addEventListener(
        "keydown",
        (event) => {
          const keyName = event.key;
      
          if (keyName === "ArrowRight") {
            // do not alert when only Control key is pressed.
            changeimg('+')
            return;
          }
          if (keyName === "ArrowLeft") {
            // do not alert when only Control key is pressed.
            changeimg('-')
            return;
          }
      
        },
        false,
      );
      
      return () => {
        document.documentElement.style.overflow = "";
      };
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
      <span className='w-full h-full absolute' onClick={()=>{setToggle(false)}}></span>
            </div>

        </div>

        <div className='fixed z-[1000] cursor-pointer top-4 right-4 bg-black flex justify-center items-center h-[50px] w-[50px] rounded-lg' onClick={()=>{
          setToggle(false)}}>
            <ImCross className='fill-[white]'/>
        </div>

        {/* 4 multiple img in gallery */}

{    datas.length > 1 &&   <>
                <div className={' p-4 absolute z-1000 text-4xl fill-[#ffffff] text-[#fffff] w-full flex justify-between'}>
                <FaArrowLeft onClick={()=>changeimg('-')} className='cursor-pointer'/>
                <FaArrowRight onClick={()=>changeimg('+')} className='cursor-pointer'/>
                </div>

                {datas[selectedImg]
                //.title
                &&
                  <>
                    <div   onClick={()=>setIsInfo(!isInfo)} className='fixed z-[1001] cursor-pointer top-20 rounded-full right-4 bg-black flex justify-center items-center h-[50px] w-[50px]'>
                      <FaInfo className='fill-white '/>
                    </div>
                <div className='fixed z-[1000] bg-white cursor-pointer h-fit  top-20 right-4 flex justify-center items-center rounded-lg transition'>
                   { isInfo && 
                      <div className='bg-white w-[450px]  pl-16 pr-16  pb-10 p-4 rounded-xl text flex flex-col gap-4 cursor-default'> 
                      <h2 className='text-2xl underline font-rec1'>{datas[selectedImg].title || 'fake title'}</h2>
                      {datas[selectedImg].description && <p className='font-rec'>{datas[selectedImg].description}</p>}
                      {
                        datas[selectedImg].reference && 
                        <div className='flex flex-col gap-2'>
                        <p className='text-[--color2] font-rec'>Decouvrir le projet en lien avec cette photo</p>
                        <Link className={'cursor-pointer border-2  zigzagsm rounded-xl text-center'} href={'/project/'+datas[selectedImg].reference.slug.current}>
                        <p className=' rounded-xl p-2 text-2xl text-white font-rec1'>
                        {datas[selectedImg].reference.title}
                        </p> 
                        </Link>
                        </div>
                        }
                        
                        </div>
                        }  
                </div>
                  </>
                }
            </>
          }

    </div>
  )
}

export default ModalImg