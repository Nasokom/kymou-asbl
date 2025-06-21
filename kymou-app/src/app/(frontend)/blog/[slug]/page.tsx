
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
    title: page.title,
    description: page.description,
  };

  metadata.openGraph = {
    images: {
      url:
      //  page.hero
      //   ? urlFor(page.hero).width(1200).height(630).url()
      //   : 
        `/api/og?id=${page._id}`,
      width: 1200,
      height: 630,
    },
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


  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  image: [loader],
  datePublished: post._createdAt,
  dateModified: post._updatedAt || post._createdAt,
  author: {
    "@type": "Person",
    name: post.author?.name || "unknow",
  },
  publisher: {
    "@type": "Organization",
    name: "Kymou asbl",
    logo: {
      "@type": "ImageObject",
      url: "https://kymou.lu/kymouLogo.svg",
    },
  },
  description: post.description,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://kymou.lu/blog/${post.slug}`,
  },
};

  return (
<>
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    <div className='min-h-[100dvh] m-4 max-[800px]:m-0 mt-[15vh] pt-4 flex flex-col items-center justify-center max-w-[1000px]'>
      
      <div className='flex flex-col w-full gap-4 mb-8 '>
              <h1 className='font-rec1 text-8xl max-[800px]:text-4xl'>{post.title}</h1>
              <p className='opacity-[0.7] text-2xl max-[800px]:text-xl'>{post.description}</p>
          <div className='text-[--color3] flex flex-wrap gap-4 text-2xl mt-2'>
              <p> Par <span className='text-black'>{post.author?.name} </span> |</p>
              <PublishedAt className='flex gap-2' publishedAt={post?._createdAt}/>   
              -
            <p className='flex items-center justify-center gap-1'>{readingTime(post?.content)}min <FaClock/> </p>
            </div>
      </div>

   <div className="flex relative w-full rounded h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" 
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
