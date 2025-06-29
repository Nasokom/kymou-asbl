import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY,BLOG_PAGE_QUERY } from "@/sanity/lib/queries";
import BlogCard from '@/components/BlogCard'
import { POSTS_QUERYResult} from "@/sanity/types";
import type { Metadata } from "next";
import JsonLdInjector from "@/components/JsonLdInjector";
import { urlFor } from "@/sanity/lib/image";

const getDatas = async () =>
  sanityFetch({query: BLOG_PAGE_QUERY});

export async function generateMetadata(): Promise<Metadata> {
  const { data: datas } = await getDatas();
  
  if (!datas){
    return {}
  }
  const metadata: Metadata  ={
    title: datas?.seo?.title || datas.title || 'Blog kymou',
    description: datas?.seo?.description||datas.description,
    keywords:datas?.seo?.tags,
  }

  //  metadata.openGraph = {
  //   images: {
  //     url: datas.seo?.image || '',
  //     width: 1200,
  //     height: 630,
  //   },
  // };

  return metadata
}


export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  const {data:datas} = await getDatas()


  //console.log(datas)
  return (
    <div className='mt-[15vh]'>
        <h1 className={'font-rec2 text-[12vw] text-center w-full overflow-hidden pb-2 max-[800px]:text-6xl '}>
          <div className='animate-[appearDown_0.3s_ease-out_forwards]'>
            Blog KYMOU
          </div>
        </h1>

        <div className="w-full flex z-0 gap-10 justify-around max-w-[1000px] p-4 max-[700px]:p-2 z-0 pt-8 pb-32 items-center flex-col flex-wrap ">
        <p className="text-2xl">{datas?.description}</p>

            {posts.map((post:POSTS_QUERYResult[number],i:number)=> {
 
                    if(!post.slug || !post.slug.current){
                        return
                    }

                return(
                            <BlogCard data={post} key={i}/>    
                )
                

                }
            )}
        </div>

            <JsonLdInjector
            slug={'blog'}
            title={'Blog kymou'}
            _createdAt={datas?._createdAt}
            _updatedAt={datas?._updatedAt}
            tags={datas?.seo?.tags}
            description={datas?.description}
            content={datas?.description}
            />

    </div>
  )
}
