
import {GALLERY_QUERY} from "@/sanity/lib/queries"
import {sanityFetch} from "@/sanity/lib/live"

import Gallery from '@/components/GalleryImg'
import { Suspense } from "react"

export const metadata = {
  title: 'Gallery',
  description: "Decouvrir l'assoctiation kymou-asbl en image",
}

export default async function Page(){

  const {data:datas} = await sanityFetch({query:GALLERY_QUERY})

  return (
    <div className='min-h-[100dvh] w-[100vw] relative flex flex-col gap-4 mt-[50px] items-center pt-0 p-2'>
        <h1 className={'font-rec2 text-9xl fixed overflow-hidden pb-2'}>
          
          <div className='animate-[appearDown_0.3s_ease-out_forwards]'>
            Galerie
          </div>

        </h1>

      <h2 className={'font-rec2 fixed top-[50vh] w-full leading-none text-center text-6xl overflow-hidden '}>
        <div className='translate-y-[100%] animate-[translateUp_0.5s_ease-out_0.3s_forwards]'>
            Scroll pour decouvrir la galerie
        </div>

        </h2>
          <Suspense fallback={<p>adsdfs</p>}>
            <Gallery images={datas}/>
          </Suspense>
    </div>
  )
}
