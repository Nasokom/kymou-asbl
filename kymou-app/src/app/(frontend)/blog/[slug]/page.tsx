
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import CustomPortableText from "@/components/CustomPortableText";
import { FaClock } from "react-icons/fa";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }


  console.log(post?._id)

  //const allPAth = await getBlogPosts()

  const readingTime = () =>{
 const x =  post?.content?.filter((block:any) => block._type === "block" && Array.isArray(block.children))
   .flatMap((block:any) => block.children.map((child:any) => child.text))
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
    const date = new Date(post?._createdAt)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()

    return day + '-'+month+'-'+year
  }
  const loader = post.hero ? urlFor(post.hero).width(1000).height(1000).url() : '/'

  return (

    <div className='min-h-[100dvh]  m-4  mt-[15vh] pt-4 flex flex-col items-center justify-center max-w-[1000px]'>

      <div className='flex flex-col w-full gap-2 mb-8 '>
              <h1 className='font-rec1 text-8xl'>{post.title}</h1>
              <p className='opacity-[0.7] '>{post.description}</p>
          <div className='text-[--color3] flex gap-4 text-[20px]'>
              <p> Par <span className='text-black'>{post.author?.name} </span> |</p>
            <p>{dateFormat()}</p>
            -
            <p className='flex items-center justify-center gap-1'>{readingTime()}min <FaClock/> </p>
            </div>
      </div>

   <div className="flex relative w-full rounded h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" alt={post?.hero?.altText || post?.hero?.description || post?.hero?.originalFilename}/>
      </div>


    <article className='project-section gap-10 flex flex-col alt max-[800px]:p-4  max-w-[1000px] mt-12'>
        
        <CustomPortableText  value={post.content} className={' alt flex gap-4 text-[20px] flex-wrap'}/>

    </article>


    </div>
  )
}
