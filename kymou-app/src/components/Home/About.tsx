import React from 'react'
import CustomPortableText from '@/components/CustomPortableText'
import TitleEffect from '@/components/TitleEffect'
import { HomePage2 } from '@/sanity/types'

const About = ({data}:{data:HomePage2["about"]}) => {
  return (
    <div className='flex justify-center flex-col items-center gap-8 w-full p-10 max-[800px]:p-2'>
      <TitleEffect>
          {data?.title}
      </TitleEffect>
        <CustomPortableText 
        value={data?.text}
        className={"font-rec min-[800px]:w-[90%] text-4xl max-[800px]:text-2xl max-[800px]:pl-1"}
        />
    </div>
  )
}

export default About