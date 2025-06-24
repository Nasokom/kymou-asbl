'use client'
import React, {useEffect, useState} from 'react'
import { urlFor } from '../../old/utils/sanity/sanity'
import Image from 'next/image'
import CustomPortableText from '../../old/components/CustomPortableText'
import ModalImg from './ModalImg'

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
     <div className={`${data.image ? 'alt gap-4':'alt'} rounded-xl p-2 max-[800px]:p-0 `} >
        {data.image?(
          <Image key={data.image._key} onClick={()=>callModal()} alt={data.image.altText  || data.image.originalFilename ||'image projet kymou' }className="textimg rounded p-4 max-[800px]:p-0 mb-2 max-[800px]:pb-2 pb-2 overflow-hidden cursor-pointer border-[transparent] transition hover:rounded-lg" style={{objectFit:"cover"}} src={loader} width={400} height={400} />
        ) :''}
        <CustomPortableText className='text-2xl pt-6  max-[800px]:pb-8' value={data.text} />
        
    </div>
        {toggle && <ModalImg datas={[{url:loader}]} setToggle={setToggle} toggle={toggle} selectedImg={0} setSelectedImg={setToggle}/>}
        </>
  )
}

export default RichTextImg




