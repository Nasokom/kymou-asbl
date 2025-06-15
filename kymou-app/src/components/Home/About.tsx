import React from 'react'
import CustomPortableText from '@/components/CustomPortableText'
import TitleEffect from '@/components/TitleEffect'
import { HomePage2 } from '@/sanity/types'

const About = ({data}:{data:HomePage2["about"]}) => {
  return (
    <div className='flex justify-center flex-col items-center gap-8 w-full p-10'>
      <TitleEffect>
          {data?.title}
      </TitleEffect>
        <CustomPortableText 
        value={data?.text}
        className={"font-rec pl-[2em] md:text-4xl sm:text-4xl sm:leading-[1.5em] md:leading-[1.5em] "}
        />
    </div>
  )
}

export default About