
import Only from "@/components/Only";
import dynamic from "next/dynamic"
import AxesHome from "../components/Home/AxesHome";
import Hero from "../components/Home/Hero";
import { Suspense } from "react";
import Image from "next/image";
import {getHome} from "./utils/actions";
import About from "../components/Home/About";
import { urlFor } from "./utils/sanity/sanity";
import TitleEffect from "@/components/ux/TitleEffect";
import Head from "next/head";


export const metadata = {
  //generator: 'Next.js',
  applicationName: 'Kymou asbl',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', ''],
  authors: [ { name: 'Katherine Kombia' }],
  creator: 'Katherine Kombia',
  publisher: 'Katherine Kombia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}



export default async function Home() {
  const datas = await getHome()
  const loader = urlFor(datas.footer.image).url()
  //comment 4 launch
  return (

    <>
        <Head>
      <meta name="google-site-verification" content="4VHbOuvyxkMPrmqoVd5xPWHVRe_y6d0khtbrCcdiCTY" />
      <meta name="generator" content="4VHbOuvyxkMPrmqoVd5xPWHVRe_y6d0khtbrCcdiCTY" />
      </Head>
    <div className='min-h-[100vh] w-[100vw] flex flex-col gap-4' >

        <Hero  datas={datas.header}/>
        <About data={datas.about}/>
        <AxesHome datas={datas.goal}/>

        <div className="p-2">

          <TitleEffect big={true}>{datas.footer.title}</TitleEffect>
          <div className="w-full h-[100vh] flex items-center justify-center relative">
            <Image
              src={loader}
              style={{objectFit:'contain'}}
              fill
              />
          </div>
        </div>
    </div>
</>
  );
}
