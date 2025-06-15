import ProjectCard from "@/components/Project/ProjectCard"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { PROJECTS_QUERYResult } from "@/sanity/types"

export const metadata = {
    title: 'Nos projets',
    description: 'Decouvrez les projets de Kymou',
  }


export default async function Page(){

const {data:project}:{data:PROJECTS_QUERYResult} = await sanityFetch({query:PROJECTS_QUERY})

    return(        
            <div className="w-full flex z-0 gap-10 justify-around z-0 pt-8 pb-32 items-center flex-wrap ">
                    {project.map((p:PROJECTS_QUERYResult[0],i:number) =>  <ProjectCard project={p} index={i} key={i}/>)}
            </div>
    )
}