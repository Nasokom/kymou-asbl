import CustomPortableText from "@/components/CustomPortableText"
import { getSingleProject,resolveInnerImgREF } from "@/app/utils/actions"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/app/utils/sanity/sanity"
import RichTextImg from "@/components/RichTextImg"

export default async function Page({params}){
    const { _id } = await params

    const project = await getSingleProject(_id)
    //const loader =  urlFor(project.header[0].image).blur(50).url()
    const loader = project.hero ? urlFor(project.hero).url() : '/'

    const loader2 = (ref)=>{
      const x = resolveInnerImgREF(ref)
        return x
    }
    
  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col mt-2 items-center pt-0'>

          <div className="flex absolute top-0 font-rec1 ml-[25%] w-full z-100 pr-2 h-24 items-center gap-4 overflow-hidden">
            <h2 className="text-8xl top-0 translate-y-[100%] uppercase animate-[translateUp_0.3s_ease-out_1.2s_forwards] absolute top-0 ">{project.title}</h2>
            <p className="text-8xl opactiy-0"></p>
          </div>
      <div className="flex relative w-[70vw] rounded min-h-[100vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded"/>
      </div>


        <div className='project-section gap-10 flex flex-col p-10 '>

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
           
          <div className="w-full">

             <h3 className="font-rec1 text-8xl border-b-4 border-[black] text-center mb-8">Gallerie</h3>

             <div className="flex w-full flex-wrap justify-around">

                {project.gallery.map((img,i)=>{

                  const loader = urlFor(img).url()
                  return(
                    <Image
                    key={i}
                    src={loader}
                    style={{objectFit:'cover'}}
                    width={300}
                    height={300}
                    />
                  )
                })}

             </div>
          </div>
           
           
           }
    </div>
  )
}
