import React from 'react'
import { urlFor } from '../utils/sanity/sanity'
import Image from 'next/image'
import CustomPortableText from './CustomPortableText'

const RichTextImg = ({data}) => {
    const loader= data.inPhoto ? urlFor(data.inPhoto.image).url() : ''
    //const loader = '/'
  return (
     <div className={data.inPhoto ? 'alt gap-4':''}>
        {data.inPhoto ?(
            <Image className="textimg" style={{objectFit:"cover"}} src={loader} width={300} height={300}/>
        ) :''}
        <CustomPortableText className='text-xl pt-6' value={data.text}/>
    </div>
  )
}

export default RichTextImg




