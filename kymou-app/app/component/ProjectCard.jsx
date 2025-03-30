import React from 'react'
import Image from 'next/image'
import { urlFor } from '../utils/sanity/sanity'

const ProjectCard = ({project}) => {
  const loader = project.header[0] ? urlFor(project.header[0].image).width(300).height(300).url() : "/"
  return (
    <div className=''>
        <Image width={300} height={300} src={loader} style={{objectFit:'cover'}}/>
        <p>{project.title}</p>
    </div>
  )
}

export default ProjectCard