import CustomPortableText from "@/components/CustomPortableText"
import { getSingleProject,resolveInnerImgREF } from "@/app/utils/actions"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/app/utils/sanity/sanity"
import RichTextImg from "@/components/RichTextImg"
import { notFound } from 'next/navigation'
import Gallery from "@/components/gallery/GalleryImg"

export default async function Page({params}){
    const { _id } = await params

    const project = await getSingleProject(_id)

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

          <div className="flex absolute h-[25vh]  p-0 text-[5vw] top-0 font-rec1 w-full  overflow-hidden border-b-4 border-[black]">
            <p className="w-full leading-none absolute bottom-0 h-[5.5vw] p-0 text-center uppercase translate-y-[100%] animate-[translateUp_0.3s_ease-out_1.2s_forwards]">{project.title}</p>
          </div>

      <div className="flex relative w-[70vw] rounded min-h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded"/>
      </div>


        <div className='project-section gap-10 flex flex-col p-10 max-w-[1000px]'>

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

           </div>

           {project.gallery &&
           
          <div className="w-full p-10">

             <h3 className="font-rec1 text-8xl border-b-4 border-[black] text-center mb-8">Gallerie</h3>

             <Gallery images={project.gallery} marge={false}/>
          </div>
           
           
           }
    </div>
  )
}
