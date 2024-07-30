import React from 'react'
import Image from 'next/image'
import {urlFor} from '@/app/utils/sanity/sanity'
import {getProject, getLqip} from '@/app/utils/actions'
import Title from './ux/Title';

const Project = async () => {

    const datas = await getProject()
    const lqips = await getLqip();

    const matchLqip = (ref) => {

        const match = lqips.find((elt) => elt._id == ref)

        return match ? match.metadata.lqip : null

    }



    const projects = datas.project || null

  return (
    <div className='flex flex-col w-full gap-10'>

        <Title>Projets</Title>

    <div className='flex gap-8 sm:gap-4 flex-wrap sm:justify-between justify-center'>

        {
             projects ? 
             
             projects.map((project,i)=>{
                return (
                    <div className='flex flex-col sm:w-[31%] min-w-[300px] pb-5  border-b-2 last:border-b-0 sm:pb-0 sm:border-b-0' key={i+project._id}>
                        <h2 className='font-display text-2xl'>{project.title}</h2>
                        {/* <p className='text-xl pt-4'>{project.text}</p> */}
                        <div className='flex flex-col gap-4'>
                            <p className='text-xl pt-6 text-red-700 font-bold'>{project.probleme}</p>
                            <p className='text-xl pt-2'>{project.action}</p>
                            <p className='text-xl pt-2 font-bold'>{project.resultat}</p>
                        </div>
                    </div>
                    )
             })
             
             :<>
             <div className='flex flex-col'>
                    <h2 className='font-display'>Puits/ zcezcz</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, numquam. Alias, eveniet, deserunt soluta ipsum molestias optio vero rerum recusandae eius fuga odio, magnam expedita totam exercitationem molestiae. Obcaecati, culpa.</p>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-display'>Puits/ zcezcz</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, numquam. Alias, eveniet, deserunt soluta ipsum molestias optio vero rerum recusandae eius fuga odio, magnam expedita totam exercitationem molestiae. Obcaecati, culpa.</p>
                </div>

                <div className='flex flex-col'>
                    <h2 className='font-display'>Puits/ zcezcz</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, numquam. Alias, eveniet, deserunt soluta ipsum molestias optio vero rerum recusandae eius fuga odio, magnam expedita totam exercitationem molestiae. Obcaecati, culpa.</p>
                </div>
                </> 

        }
    </div>

    <Title>Gallery des projets</Title>

        <div className='flex flex-wrap justify-start p-2 sm:p-4 items-start gap-4 bg-2 w-full min-h-[50vh] rounded-lg relative'>

            <div className='flex flex-wrap justify-center w-full p-2 sm:p-4 items-center gap-2 sm:gap-4 w-full min-h-[50vh] rounded-lg bg-white '>
                {
                    datas.gallery &&
                    
                    datas.gallery.map((image,i)=>{

                        const lqip = matchLqip(image.asset._ref) 
                        const loader = urlFor(image).url()
                        return(
                        <Image 
                        src={loader}
                        width={300}
                        placeholder={lqip}
                        height={300}
                        style={{objectFit:'cover'}}
                        className={'relative rounded-lg w-[48.5%] sm:w-[32%] h-[25.1vw]'}
                        key={i+image.asset._ref}/>
                        
                        )
                    })
                
                }
            </div>
        </div>

    </div>
  )
}

export default Project