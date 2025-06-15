import {getBlogPosts} from '@/utils/actions'


import BlogCard from '@/components/global/BlogCard'


const page = async () => {

    const datas = await getBlogPosts()


  return (
    <div className='mt-[15vh]'>
        <div className="w-full flex z-0 gap-10 justify-around max-w-[1000px] ]z-0 pt-8 pb-32 items-center flex-wrap ">
            
        <h1 className={'font-rec2 text-9xl overflow-hidden pb-2'}>
          <div className='animate-[appearDown_0.3s_ease-out_forwards]'>
            Blog KYMOU
          </div>
        </h1>

            {
            datas.length > 0 
            ? datas.map((data,i)=> <BlogCard data={data} key={i}/>)
            : <p>aucun article publié, Reviens plus tard ...</p>
            
            }


        </div>

    </div>
  )
}

export default page