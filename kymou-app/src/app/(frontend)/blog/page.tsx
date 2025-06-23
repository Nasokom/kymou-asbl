import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import BlogCard from '@/components/BlogCard'
import { POSTS_QUERYResult} from "@/sanity/types";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <div className='mt-[15vh]'>
        <div className="w-full flex z-0 gap-10 justify-around max-w-[1000px] p-4 max-[700px]:p-2 z-0 pt-8 pb-32 items-center flex-col flex-wrap ">
            
        <h1 className={'font-rec2 text-9xl overflow-hidden pb-2 max-[800px]:text-6xl '}>
          <div className='animate-[appearDown_0.3s_ease-out_forwards]'>
            Blog KYMOU
          </div>
          
        </h1>

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

    </div>
  )
}
