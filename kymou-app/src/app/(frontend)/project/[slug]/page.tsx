
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import RichTextImg from "@/components/RichTextImg"
import { notFound } from 'next/navigation'
import Gallery from "@/components/GalleryImg"
import ButtonGroup from "@/components/ButtonGroup"
import TitleEffect from "@/components/TitleEffect"
import {sanityFetch} from '@/sanity/lib/live'
import {PROJECT_QUERY,PROJECTS_QUERY} from '@/sanity/lib/queries'
import type { Metadata } from "next";

type RouteProps = {
  params: Promise<{ slug: string }>;
};


const getProject = async (params: RouteProps["params"]) =>
  sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: project } = await getProject(params);
  
  if (!project){
    return {}
  }
  const metadata: Metadata  ={
    title: project?.seo?.title || project.title,
    description: project?.seo?.description||project.description,
  }

   metadata.openGraph = {
    images: {
      url: project.seo?.image
        ? urlFor(project?.seo?.image).width(1200).height(630).url()
        : `/api/og?id=${project._id}`,
      width: 1200,
      height: 630,
    },
  };

  return metadata
}



export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


    const { data: project } = await getProject(params);

    const {data:allPAth} = await sanityFetch({query: PROJECTS_QUERY })



    if(!project){
      notFound()
    }
    
    const currentIndex = allPAth.findIndex((elt) => elt._id == project._id)
    const nextProject = allPAth[currentIndex+1] ? allPAth[currentIndex+1] : allPAth[0]

    //const nextLoader  = urlFor(nextProject.hero).url()

    //const loader =  urlFor(project.header[0].image).blur(50).url()
    const loader = project.hero ? urlFor(project?.hero).width(1000).height(1000).url() : '/'


  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: project.title,
  image: [loader],
  datePublished: project._createdAt,
  dateModified: project._updatedAt || project._createdAt,
  author: {
    "@type": "Person",
    name: "Katherine Nicol kombia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kymou asbl",
    logo: {
      "@type": "ImageObject",
      url: "https://kymou.lu/kymouLogo.svg",
    },
  },

  description: project.description,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://kymou.lu/project/${project.slug}`,
  },
};
    
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kymou.lu",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://kymou.lu/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: project.title,
      item: `https://kymou.lu/project/${project.slug}`,
    },
  ],
};
  return (
    <div className='min-h-[100dvh] w-[100vw] pt-4 flex flex-col items-center'>

       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c'),
  }}
/>

          <div className="flex absolute h-[25vh] max-[600px]:h-[20vh] z-[3] items-end p-0 text-[5vw] top-0 font-rec1 overflow-hidden border-b-4 border-[black]">
            <h2 className="w-full leading-none bottom-0 h-[5.5vw] p-0 text-center uppercase translate-y-[100%] animate-[translateUp_0.3s_ease-out_1.2s_forwards]">{project.title}</h2>
          </div>

      <div className="flex relative w-[70vw] max-[800px]:w-[93%] rounded h-[100vh] max-[800px]:h-[80vh] overflow-hidden animate-[appearDown_1s_forwards]">
          <Image priority fill src={loader} style={{objectFit:'cover'}} className="z-0 rounded" alt={project?.hero?.asset?.altText || project?.hero?.asset?.description || project.hero?.asset?.originalFilename || "Image de Projet"}/>
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

            <ButtonGroup links={[{url:'/project',title:'Tous les projets'},{url:`/project/`+nextProject?.slug?.current,title:'Projet suivant'}]}/>
         

    </div>
  )
}
