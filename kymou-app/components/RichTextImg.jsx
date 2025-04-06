'use client'
import React, {useState} from 'react'
import { urlFor } from '../app/utils/sanity/sanity'
import Image from 'next/image'
import CustomPortableText from './CustomPortableText'
import ModalImg from './gallery/ModalImg'

const RichTextImg = ({data}) => {
  const [toggle,setToggle] = useState(null)
    const loader= data.image ? urlFor(data.image).url() : ''
    //const loader = '/'
  return (<>
     <div className={data.inPhoto ? 'alt gap-4':''} onClick={()=>setToggle(0)}>
        {data.inPhoto ?(
          <Image className="textimg rounded p-4 overflow-hidden" style={{objectFit:"cover"}} src={loader} width={400} height={400} />
        ) :''}
        <CustomPortableText className='text-xl pt-6' value={data.text}/>
        
    </div>
        {toggle && <ModalImg datas={[{url:loader}]} selectedImg={toggle} setSelectedImg={setToggle}/>}
        </>
  )
}

export default RichTextImg




