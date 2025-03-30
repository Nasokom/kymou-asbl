import Link from "next/link"
import { getProjects } from "../utils/actions"
import ProjectCard from "../component/ProjectCard"
export default async function Page(){

const project = await getProjects()
    return(
        <div>

            <div className="flex gap-4">
                    {project.map((p,i) =>{
                        
                            return (
                                <>
                                { p.slug &&
                                    <Link key={i} href={`/project/${p.slug.current}`}>
                                    <ProjectCard project={p}/>
                                    </Link>  
                                    }
                                </>
                            
                    )
                })}
            </div>
        </div>
    )
}