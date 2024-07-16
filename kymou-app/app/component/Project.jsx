import React from 'react'
import Image from 'next/image'
import {urlFor} from '@/app/utils/sanity/sanity'
import {getProject} from '@/app/utils/actions'
import Title from './ux/Title';

const Project = async () => {

    const datas = await getProject()

    console.log(datas)

    const projects = datas.project || null

  return (
    <div className='flex flex-col w-full gap-10'>

        <Title>Projets</Title>

    <div className='flex gap-4 flex-wrap justify-between'>

        {
             projects ? 
             
             projects.map((project,i)=>{
                return (
                    <div className='flex flex-col w-[31%] min-w-[300px]' key={i+project._id}>
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

        <div className='flex flex-wrap justify-start p-4 items-start gap-4 bg-2 w-full min-h-[50vh] rounded-lg relative'>

            <div className='flex flex-wrap justify-start p-4 items-start gap-4 w-full min-h-[50vh] rounded-lg bg-white '>
                {
                    datas.gallery &&
                    
                    datas.gallery.map((image,i)=>{
                        const loader = urlFor(image).url()
                        return(
                        <Image 
                        src={loader}
                        width={300}
                        height={300}
                        style={{objectFit:'contain'}}
                        className={'relative rounded-lg'}
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