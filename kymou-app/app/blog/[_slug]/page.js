import React from 'react'
import Image from 'next/image'
import {getBlogPosts, getSingleBlogPost} from '@/utils/actions'
import { urlFor } from '@/utils/sanity/sanity'
import CustomPortableText from '@/components/global/CustomPortableText'
import { FaClock } from "react-icons/fa";

const page = async ({params}) => {
  console.log(params._slug)
    console.log('client')
    const article = await getSingleBlogPost(params._slug)
    
    console.log(article._id)

   const allPAth = await getBlogPosts();
   
   const readingTime = () =>{
  const x =  article.content.filter((block) => block._type === "block" && Array.isArray(block.children))
    .flatMap((block) => block.children.map((child) => child.text))
    .join(" ") || "";
      const wordsPerMinute = 150 // Average reading speed of an adult
      const words = x.split(/\s+/).length // Split by whitespace and count words
      const minutes = Math.ceil(words / wordsPerMinute)
      return minutes
   }
    // const currentIndex = allPAth.findIndex((elt) => elt._id == article._id)
    // const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

    //const nextLoader  = urlFor(nextProject.hero).url()
  const dateFormat = () => {
    const date = new Date(article._createdAt)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    return day + '-'+month+'-'+year
  }

    const loader = article.hero ? urlFor(article.hero.url).width(1000).height(1000).url() : '/'
  return (
    <div className='min-h-[100dvh]  m-4  mt-[15vh] pt-4 flex flex-col items-center justify-center max-w-[850px]'>

      <div className='flex justify-center flex-col items-start max-w-full gap-2 mb-8 '>
              <h1 className='font-rec1 text-8xl'>{article.title}</h1>
              <p className='opacity-[0.7] '>{article.description}</p>
          <div className='text-[--color3] flex gap-4'>
              <p> Par <span className='text-black'>{article.author.name} </span> |</p>
            <p>{dateFormat()}</p>
            -
            <p className='flex items-center justify-center gap-1'>{readingTime()}min <FaClock/> </p>
            </div>
      </div>

   <div className="flex relative w-full rounded h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" alt={article.hero.altText || article.hero.description || article.hero.originalFilename}/>
      </div>


    <article className='project-section gap-10 flex flex-col p-10 max-[800px]:p-4  max-w-[1000px] mt-12'>
        
        <CustomPortableText  value={article.content} className={'flex gap-2 text-[20px] flex-wrap'}/>

    </article>


    </div>
  )
}

export default page