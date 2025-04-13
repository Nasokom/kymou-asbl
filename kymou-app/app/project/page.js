import Link from "next/link"
import { getProjects } from "../utils/actions"
import ProjectCard from "../../components/Project/ProjectCard"
import { Suspense } from "react"
import SuspenseWithDelay from "@/components/ux/SuspenseWithDelay"
export default async function Page(){

const project = await getProjects()

    return(
        
            <div className="w-full flex gap-10 justify-between overflow-hidden z-1 pt-8 pb-8 items-center flex-wrap ">
                    {project.map((p,i) =>{
                        
                        return (
                            <div className="" key={i}>
                                { p.slug &&
                                    <Link key={i} href={`/project/${p.slug.current}`}>
                                        <div className="z-[-10]">
                                            <ProjectCard project={p} index={i}/>

                                        </div>
                                    </Link>  
                                    }
                                </div>
                            
                        )
                    })}
            </div>
    )
}