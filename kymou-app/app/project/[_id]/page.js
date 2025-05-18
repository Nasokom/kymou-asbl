import CustomPortableText from "@/components/CustomPortableText"
import { getSingleProject,resolveInnerImgREF, getProjects } from "@/utils/actions"
import Image from "next/image"
import { urlFor } from "@/utils/sanity/sanity"
import RichTextImg from "@/components/RichTextImg"
import { notFound } from 'next/navigation'
import Gallery from "@/components/gallery/GalleryImg"
import ButtonGroup from "@/components/ux/ButtonGroup"
import TitleEffect from "@/components/ux/TitleEffect"


export async function generateMetadata({ params, searchParams }){

  const {_id} = await params
 
  // fetch post information
  const post = await getSingleProject(_id)

  if (!post){
    return
  }
  return {
    key:post._id,
    title: post.title,
    description: post.description,
  }
}


export default async function Page({params,list}){
    const { _id } = await params

    const project = await getSingleProject(_id)
    const allPAth = await getProjects();
    if(!project){
      notFound()
    }
    const currentIndex = allPAth.findIndex((elt) => elt._id == project._id)
    const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

    const nextLoader  = urlFor(nextProject.hero).url()

    //const loader =  urlFor(project.header[0].image).blur(50).url()
    const loader = project.hero ? urlFor(project.hero.url).width(1000).height(1000).url() : '/'
    const loader2 = (ref)=>{
      const x = resolveInnerImgREF(ref)
        return x
    }
    
  return (
    <div className='min-h-[100dvh] w-[100vw] pt-4 flex flex-col items-center'>

          <div className="flex absolute h-[25vh] max-[600px]:h-[20vh] z-[3] items-end p-0 text-[5vw] top-0 font-rec1 overflow-hidden border-b-4 border-[black]">
            <p className="w-full leading-none bottom-0 h-[5.5vw] p-0 text-center uppercase translate-y-[100%] animate-[translateUp_0.3s_ease-out_1.2s_forwards]">{project.title}</p>
          </div>

      <div className="flex relative w-[70vw] max-[800px]:w-[93%] rounded h-[100vh] max-[800px]:h-[80vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" alt={project.hero.altText || project.hero.description || project.hero.originalFilename}/>
      </div>


        <article className='project-section gap-10 flex flex-col p-10 max-[800px]:p-4 sm:p-0 max-w-[1000px] mt-12'>
            <section>
            { project.pitch && 
            <>
            <TitleEffect>Intro</TitleEffect>
            <RichTextImg data={project.pitch}/>
            </>
            }

            { project.problem && 
            <>
            <TitleEffect>Probleme</TitleEffect>
            <RichTextImg data={project.problem}/>
            </>
            }


            { project.action && 
            <>
            <TitleEffect>Action</TitleEffect>
            <RichTextImg data={project.action}/>
            </>
            }

            { project.result && 
            <>
            <TitleEffect>Resultat</TitleEffect>
            <RichTextImg data={project.result}/>
            </>
            }
            </section>
     
           </article>

           {project.gallery &&
           
           <div className="w-full flex flex-col  gap-8 p-8 max-[800px]:p-4 ">
 
              <TitleEffect big={true}>Galerie</TitleEffect>
 
              <Gallery images={project.gallery} marge={false}/>
 
             
           </div>
            }

            <ButtonGroup links={[{url:'/project',title:'Tous les projets'},{url:`/project/`+nextProject.slug.current,title:'Projet suivant'}]}/>
         

    </div>
  )
}
