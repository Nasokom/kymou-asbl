
import { notFound } from "next/navigation";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import CustomPortableText from "@/components/CustomPortableText";
import { FaClock } from "react-icons/fa";
import { readingTime } from "@/utils/fonction";
import { PublishedAt } from "@/components/PublishedAt";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLdInjector from "@/components/JsonLdInjector";


type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getPost = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPost(params);

  if (!page) {
    return {}
  }

  const metadata: Metadata = {
    title: page?.seo?.title || page.title,
    description: page?.seo?.description || page.description,
  };

  metadata.openGraph = {
    
    images: {
      url:
       page?.seo?.image
        ? urlFor(page?.seo?.image).width(1200).height(630).url()
        : 
        `/api/og?id=${page._id}`,
      width: 1200,
      height: 630,
    },
  };
metadata.twitter = {
  card: "summary_large_image",
  images: [
    page?.seo?.image
        ? urlFor(page?.seo?.image).width(1200).height(630).url()
        : 
        `/api/og?id=${page._id}`,
  ],
};
  // if (page.seo.noIndex) {
  //   metadata.robots = "noindex";
  // }


  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const {data: post} = await getPost(params)

  if (!post) {
    notFound();
  }



  //const allPAth = await getBlogPosts()

  // const currentIndex = allPAth.findIndex((elt) => elt._id == article._id)
  // const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

  //const nextLoader  = urlFor(nextProject.hero).url()

  const loader = post.hero ? urlFor(post.hero).width(1000).height(1000).url() : ''
  return (
<>
 <JsonLdInjector
              title={post?.title || undefined} 
              slug={"project/"+post.slug}
              _createdAt={post?._createdAt}
              _updatedAt={post?._updatedAt}
              tags={post?.seo?.tags}
              description={ post?.description|| post?.seo?.description || undefined}
              content={post.rawContent}
              image={loader}
            />
    <div className='min-h-[100dvh] mt-[20vh] pt-4 max-[800px]:p-1 flex flex-col items-center justify-center max-w-[1000px]'>
      
      <div className='flex flex-col w-full gap-4 mb-8 '>
                  <nav aria-label="Breadcrumb" className="text-sm text-[--txtColor3]">
                      <ol className="list-none flex text-ellipsis">
                        <li><Link href="/">Home</Link> &gt;</li>
                        <li><Link href="/blog">Blog</Link> &gt;</li>
                        <li aria-current="page">{post.title}</li>
                      </ol>
                    </nav>
              <h1 className='font-rec1 text-8xl max-[800px]:text-4xl'>{post.title}</h1>
              <p className='opacity-[0.7] text-2xl max-[800px]:text-xl'>{post.description}</p>
          <div className='text-[--txtColor3] flex flex-wrap gap-4 text-2xl mt-2'>
              <p> Par <span className='text-[--txtColor1]'>{post.author?.name} </span> |</p>
              <PublishedAt className='flex gap-2' publishedAt={post?._createdAt}/>   
              -
            <p className='flex items-center justify-center gap-1'>{readingTime(post?.content)}min <FaClock/> </p>
            </div>
      </div>

   <div className="flex relative w-full rounded h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image priority fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded bg-[--bgColor2]" 
         // alt={post?.hero?.altText || post?.hero?.description || post?.hero?.originalFilename}
         alt="fake altText"
         />
      </div>


    <article className='gap-10 flex flex-col alt max-[800px]:p-1  max-w-[1000px] mt-12'>
        
        <CustomPortableText  value={post.content} className={' alt flex gap-4 text-xl flex-wrap'}/>

    </article>


    </div>
</>
  )
}
