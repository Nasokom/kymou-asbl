import React from 'react'
import CustomPortableText from '../CustomPortableText'
import SmallTitle from '../SmallTitle'
import TitleEffect from '../ux/TitleEffect'

const About = ({data}) => {
  return (
    <div className='flex justify-center flex-col items-center gap-8 w-full p-10'>
      <TitleEffect>
          Qui Somme nous
      </TitleEffect>
        <CustomPortableText 
        value={data.text}
        className={"font-rec pl-[2em] md:text-4xl sm:text-4xl sm:leading-[1.5em] md:leading-[1.5em] "}
        />
    </div>
  )
}

export default About