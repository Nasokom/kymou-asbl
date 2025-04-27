'use client'
import React, {useEffect, useState} from 'react'
import { urlFor } from '../utils/sanity/sanity'
import Image from 'next/image'
import CustomPortableText from './CustomPortableText'
import ModalImg from './gallery/ModalImg'

const RichTextImg = ({data}) => {
  const [toggle,setToggle] = useState(false)
  const [selectedImg, setSelectedImg] = useState(0)
    const loader= data.image ? urlFor(data.image).url() : ''
    //const loader = '/'
    function callModal(){
      setToggle(true)
      setSelectedImg(0)
    }

    useEffect(()=>{

    },[])


  return (<>
     <div className={`${data.image ? 'alt gap-4':'alt'} rounded-xl p-2`} onClick={()=>callModal()}>
        {data.image?(
          <Image key={data.image.asset._ref}className="textimg rounded p-4 overflow-hidden cursor-pointer border-[transparent] transition hover:rounded-lg" style={{objectFit:"cover"}} src={loader} width={400} height={400} />
        ) :''}
        <CustomPortableText className='text-2xl pt-6' value={data.text} />
        
    </div>
        {toggle && <ModalImg datas={[{url:loader}]} setToggle={setToggle} toggle={toggle} selectedImg={0} setSelectedImg={setToggle}/>}
        </>
  )
}

export default RichTextImg




