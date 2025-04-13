import Link from "next/link"
import { getProjects } from "../utils/actions"
import ProjectCard from "../../components/Project/ProjectCard"
import { Suspense } from "react"
import SuspenseWithDelay from "@/components/ux/SuspenseWithDelay"
export default async function Page(){

const project = await getProjects()



    return(
        
            <div className="w-full flex gap-10 justify-around  z-1 pt-8 pb-32 items-center flex-wrap ">

                    {project.map((p,i) =>{
                        
                        return (
                            <>
                                { p.slug &&
                                  
                                            <ProjectCard project={p} index={i} key={i}/>
                                    }
                            </>
                            
                        )
                    })}
            </div>
    )
}