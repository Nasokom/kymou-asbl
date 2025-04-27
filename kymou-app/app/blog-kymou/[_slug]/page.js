import React from 'react'
import Image from 'next/image'
import {getBlogPosts, getSingleBlogPost} from '@/utils/actions'
import { urlFor } from '@/utils/sanity/sanity'
import CustomPortableText from '@/components/global/CustomPortableText'

const page = async ({params}) => {

    
    const article = await getSingleBlogPost(params._slug)
    
    console.log(article)

   const allPAth = await getBlogPosts();

    if(!article){
      notFound()
    }

    const currentIndex = allPAth.findIndex((elt) => elt._id == article._id)
    const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

    //const nextLoader  = urlFor(nextProject.hero).url()


    const loader = article.hero ? urlFor(article.hero.url).width(1000).height(1000).url() : '/'
    
  return (
    <div className='min-h-[100dvh] w-[100vw] pt-4 flex flex-col items-center'>

          <div className="flex absolute h-[25vh] max-[600px]:h-[20vh] z-[3] items-end p-0 text-[5vw] top-0 font-rec1 overflow-hidden border-b-4 border-[black]">
            <p className="w-full leading-none bottom-0 h-[5.5vw] p-0 text-center uppercase translate-y-[100%] animate-[translateUp_0.3s_ease-out_1.2s_forwards]">{article.title}</p>
          </div>
   <div className="flex relative w-[70vw] max-[800px]:w-[93%] rounded h-[100vh] max-[800px]:h-[80vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" alt={article.hero.altText || article.hero.description || article.hero.originalFilename}/>
      </div>


    <article className='project-section gap-10 flex flex-col p-10 max-[800px]:p-4  max-w-[1000px] mt-12'>
        
        <CustomPortableText  value={article.content} className={'flex gap-2 flex-wrap'}/>

    </article>


    </div>
  )
}

export default page