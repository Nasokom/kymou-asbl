
import AxesHome from "@/components/Home/AxesHome";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";

import Image from "next/image";
import {HOME_QUERY} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
//import { urlFor } from "@/sanity/lib/image";
import TitleEffect from "@/components/TitleEffect";
import { HOME_QUERYResult } from "@/sanity/types";



export const metadata = {
  title:'Home',
  description:'Decouvrez kymou-asbl',
  generator: 'Next.js',
  applicationName: 'Kymou asbl',
  referrer: 'origin-when-cross-origin',
  keywords: ['Kymou', 'Kymou-asbl', 'asbl',],
  authors: [ { name: 'Katherine Kombia', url: 'https://kymou.lu' }],
  creator: 'Katherine Kombia',
  publisher: 'Katherine Kombia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default async function Home() {
const {data:datas}:{data:HOME_QUERYResult} = await sanityFetch({query:HOME_QUERY})

  //const loader = urlFor(datas?.footer?.image).url() || ''

  return (
    <div className='min-h-[100vh] w-[100vw] flex flex-col gap-8' >

        <Hero {...datas?.header}/>
        <About data={datas?.about}/>
        <AxesHome datas={datas?.goal}/>

        <div className="p-2">

          <TitleEffect className="mt-8" big={true}>{datas?.footer?.title}</TitleEffect>
          <div className="w-full h-[100vh] flex items-center justify-center relative">
            <Image
              alt=''
              placeholder="blur"
              blurDataURL={datas?.footer?.image?.asset?.metadata?.lqip}
              src={datas?.footer?.image?.asset?.url || ''}
              style={{objectFit:'contain'}}
              fill
              />
          </div>
        </div>
    </div>
  );
}
