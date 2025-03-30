import React from 'react'
import CustomPortableText from '../CustomPortableText'
import SmallTitle from '../SmallTitle'

const About = ({data}) => {
  return (
    <div className='flex justify-center flex-col items-center gap-8 w-full p-10'>
        <SmallTitle>{"01/ Qui Somme nous"}</SmallTitle>
        <CustomPortableText 
        value={data.text}
        className={"md:text-7xl sm:text-5xl sm:leading-[1.5em] md:leading-[1.5em] "}
        />
    </div>
  )
}

export default About