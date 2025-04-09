import Link from "next/link"
import { getProjects } from "../utils/actions"
import ProjectCard from "../../components/Project/ProjectCard"
import { Suspense } from "react"
import SuspenseWithDelay from "@/components/ux/SuspenseWithDelay"
export default async function Page(){

const project = await getProjects()
    return(
        <div className="overflow-scroll w-full h-[70vh] max-h-[70vh] border-b-4 border-black ">
        
            <div className="w-full flex mt-8 gap-10 justify-between pt-2 pb-8 items-center flex-wrap overflow-hidden">
                <Suspense fallback={ <div className='w-full h-full min-h-[70vh] zigzag'></div>}>

                    {project.map((p,i) =>{
                        
                        return (
                            <>
                                { p.slug &&
                                    <Link key={i} href={`/project/${p.slug.current}`}>
                                    <ProjectCard project={p} index={i}/>
                                    </Link>  
                                    }
                                </>
                            
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}