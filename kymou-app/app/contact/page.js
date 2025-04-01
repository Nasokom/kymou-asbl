import React from 'react'
import { getContact } from '../utils/actions'
import Link from 'next/link'
import CustomPortableText from '../component/CustomPortableText'

const page = async () => {

    const data = await getContact()
  return (
    <div className='h-[100dvh] w-[100vw] items-center justify-center flex flex-col gap-4 zigzag'>


        <Link href={'mailto:'+data.email}>{data.email}</Link>
        
        <h2 className='text-4xl'>{data.asbl.title}</h2>
        <div>
            <p>{data.asbl.name}</p>

           {data.asbl.soutien && <p>{data.asbl.soutien}</p>}

            <p>{data.asbl.bic}</p>

            <p>{data.asbl.iban}</p>
        </div>

        {data.text && <CustomPortableText value={data.text}/>}
    </div>
  )
}

export default page