import Link from "next/link"
import { getProjects } from "../utils/actions"
import ProjectCard from "../../components/Project/ProjectCard"
import { Suspense } from "react"
export default async function Page(){

const project = await getProjects()
    return(
        <div className="overflow-scroll h-[70vh] max-h-[70vh]">
        
            <div className="w-full flex gap-10 justify-between pt-2 items-center flex-wrap">
                <Suspense fallback={<p>Loading</p>}>

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