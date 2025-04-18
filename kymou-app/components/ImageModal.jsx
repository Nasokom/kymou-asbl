import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight,FaInfoCircle  } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {urlFor} from '@/utils/sanity/sanity'
import Link from 'next/link';

const ImageModal = ({selectedImg,setSelectedImg, datas}) => {

  const dLength = datas.length -1
  function changeimg(dir){
    if(dir == "+" ){
      const i = selectedImg.index+1
      if(i > dLength){
        setSelectedImg({...datas[0],index:0})
        return
      }
      setSelectedImg({...datas[i],index:i})
    
    }
    if(dir == "-" ){
      const i = selectedImg.index-1
      if(i < 0){
        setSelectedImg({...datas[dLength],index:dLength})
        return
      }
      setSelectedImg({...datas[i],index:i})
    }
  }
    const [loader,setLoader] = useState('')
             useEffect(()=>{
              console.log(selectedImg)
                console.log(datas)
               // setLoader(urlFor(datas[selectedImg]).url())
                 
            },[selectedImg])

  return (
    <div className='fixed w-[100vw] flex h-[100vh] flex items-center justify-center border-solid border-2 z-1002 top-0 l-0 backdrop-blur-xl ' style={{backdropFilter:'blur(15px)'}} >

        <div className='bg-2 p-4 rounded-lg'>

        <div className='w-[90vw] z-1 h-[90vh] relative overflow-hidden flex justify-center items-center'>

          {selectedImg.url &&
            <Link href={'/project/'+selectedImg.url.slug.current} className='absolute left-0 top-0 z-10'>
              <div className='m-4  p-4 relative rounded border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)] border-2 border-solid flex backdrop-blur-sm border-1 border-current '>
              <FaInfoCircle  className='absolute top-1 left-1'/>
                <span className='font-display'>
                  Learn more
                </span>
              </div>
            </Link>
          }
          <Image
          fill
          placeholder={selectedImg.lqip}
          src={selectedImg.src}
          style={{objectFit:'cover'}}
          className='rounded-lg'
          />
        </div>
          </div>

        <div className='absolute z-1000 cursor-pointer top-10 right-10 bg-black flex justify-center items-center h-10 m-4 w-10 rounded-lg' onClick={()=>{
          setSelectedImg(null)}}>
            <ImCross className='fill-[white]'/>
        </div>

        <div className={' p-4 absolute z-1000 text-4xl fill-[#ffffff] text-[#fffff] w-full flex justify-between'}>
          <FaArrowLeft onClick={()=>changeimg('-')} className='cursor-pointer'/>
          <FaArrowRight onClick={()=>changeimg('+')} className='cursor-pointer'/>
        </div>


    </div>
  )
}

export default ImageModal