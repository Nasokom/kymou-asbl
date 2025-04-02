import CustomPortableText from "@/app/component/CustomPortableText"
import { getSingleProject,resolveInnerImgREF } from "@/app/utils/actions"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/app/utils/sanity/sanity"
import RichTextImg from "@/app/component/RichTextImg"

export default async function Page({params}){
    const { _id } = await params

    const project = await getSingleProject(_id)
    //const loader =  urlFor(project.header[0].image).blur(50).url()
    const loader = urlFor(project.hero).url()

    const loader2 = (ref)=>{
      const x = resolveInnerImgREF(ref)
        return x
    }
  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4 mt-2 items-center p-10 pt-0'>
              <Link href={'/project'}>{"< Retour"}</Link>
      <div className="flex relative w-full gap-8 min-h-[40vh] justify-center items-center">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0"/>
          <div className="z-10 w-full h-full bg-[rgba(255,255,255,0.4)]">
              <h1 className="font-display">{project.title}</h1>
          </div>
      </div>


        <div className='gap-10 flex flex-col '>

            { project.pitch && <RichTextImg data={project.pitch}/>}
            { project.problem && <RichTextImg data={project.problem}/>}

            { project.action && <RichTextImg data={project.action}/>}
              { project.result && <RichTextImg data={project.result}/>}

           </div>
    </div>
  )
}
