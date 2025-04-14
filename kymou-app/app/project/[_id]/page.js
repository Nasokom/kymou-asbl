import CustomPortableText from "@/components/CustomPortableText"
import { getSingleProject,resolveInnerImgREF, getProjects } from "@/app/utils/actions"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/app/utils/sanity/sanity"
import RichTextImg from "@/components/RichTextImg"
import { notFound } from 'next/navigation'
import Gallery from "@/components/gallery/GalleryImg"
import ProjectCard from "@/components/Project/ProjectCard"

export default async function Page({params,list}){
    const { _id } = await params

    const project = await getSingleProject(_id)
    const allPAth = await getProjects();
    const currentIndex = allPAth.findIndex((elt) => elt._id == project._id)
    const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

    const nextLoader  = urlFor(nextProject.hero).url()
    if(!project){
      notFound()
    }

    //const loader =  urlFor(project.header[0].image).blur(50).url()
    const loader = project.hero ? urlFor(project.hero).url() : '/'
    console.log(urlFor(project.hero))
    const loader2 = (ref)=>{
      const x = resolveInnerImgREF(ref)
        return x
    }
    
  return (
    <div className='min-h-[100dvh] w-[100vw] pt-2 flex flex-col items-center'>

          <div className="flex absolute h-[25vh] z-[3] items-end p-0 text-[5vw] top-0 font-rec1 overflow-hidden border-b-4 border-[black]">
            <p className="w-full leading-none bottom-0 h-[5.5vw] p-0 text-center uppercase translate-y-[100%] animate-[translateUp_0.3s_ease-out_1.2s_forwards]">{project.title}</p>
          </div>

      <div className="flex relative w-[70vw] rounded min-h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded"/>
      </div>


        <div className='project-section gap-10 flex flex-col p-10 sm:p-0 max-w-[1000px]'>

            { project.pitch && 
            <>
            <h3 className="font-rec1 text-6xl border-b-4 border-[black]">Intro</h3>
            <RichTextImg data={project.pitch}/>
            </>
            }

            { project.problem && 
            <>
            <h3 className="font-rec1 text-6xl border-b-4 border-[black]">Probleme</h3>
            <RichTextImg data={project.problem}/>
            </>
            }


            { project.action && 
            <>
            <h3 className="font-rec1 text-6xl border-b-4 border-[black]">Action</h3>
            <RichTextImg data={project.action}/>
            </>
            }

            { project.result && 
            <>
            <h3 className="font-rec1 text-6xl border-b-4 border-[black]">Resultat</h3>
            <RichTextImg data={project.result}/>
            </>
            }

           {project.gallery &&
           
          <div className="w-full">

             <h3 className="font-rec1 text-8xl border-b-4 border-[black] text-center mb-8">Gallerie</h3>

             <Gallery images={project.gallery} marge={false}/>

            
          </div>
           }
        

          <div className="mt-2 flex justify-center gap-4 w-full" >   
            <div className="flex flex-col gap-4 items-center">
                <p className="font-rec1 text-2xl underline">Retour a la liste des projets</p>
                <Link href={'/project'} className='border-2 border-black p-4 transition rounded-lg hover:bg-white'>Tous les projets</Link>
              </div>
              
              <div className="flex flex-col gap-4 items-center">
                <p className="font-rec1 text-2xl underline">Decouvrir le projet suivant</p>
                <Link className='border-2 border-black p-4 transition rounded-lg hover:bg-white' href={`/project/`+nextProject.slug.current}> {nextProject.title}</Link>
              </div>
          </div>
           </div>



    </div>
  )
}
