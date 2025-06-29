import ProjectCard from "@/components/Project/ProjectCard"
import { PROJECTS_QUERY,PROJECT_PAGE_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { PROJECTS_QUERYResult } from "@/sanity/types"
import type { Metadata } from "next"
import JsonLdInjector from "@/components/JsonLdInjector"



const getDatas = async () =>
  sanityFetch({query: PROJECT_PAGE_QUERY});

export async function generateMetadata(): Promise<Metadata> {
  const { data: datas } = await getDatas();
  
  if (!datas){
    return {}
  }
  const metadata: Metadata  ={
    title: datas?.seo?.title || datas.title || 'Projets Kymou',
    description: datas?.seo?.description||datas.description || 'Decouvrez les projets de Kymou',
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

export default async function Page(){

const {data:project}:{data:PROJECTS_QUERYResult} = await sanityFetch({query:PROJECTS_QUERY})
  const {data:datas} = await getDatas()

    return(        
            <div className="w-full flex z-0 gap-10 justify-around z-0 pt-8 pb-32 items-center flex-wrap ">

                    <p className="text-2xl w-full p-4">{datas?.description}</p>

                    {project.map((p:PROJECTS_QUERYResult[0],i:number) =>  <ProjectCard project={p} index={i} key={i}/>)}


            <JsonLdInjector
              title={datas?.seo?.title||'Nos projets'}
              slug={'project'}
              _createdAt={datas?._createdAt}
              _updatedAt={datas?._updatedAt}
              tags={datas?.seo?.tags}
              description={datas?.description}
              content={datas?.description}
            />



            </div>
    )
}