
import Only from "@/app/component/Only";
import dynamic from "next/dynamic"
import AxesHome from "./component/Home/AxesHome";
import Hero from "./component/Home/Hero";
import { Suspense } from "react";
import Image from "next/image";
import { getAbout, getAxes, getHomeHeader } from "./utils/actions";
import About from "./component/Home/About";
import { urlFor } from "./utils/sanity/sanity";


export default async function Home() {

  const headerData = await getHomeHeader()
  const axesData = await getAxes()
  const aboutData = await getAbout()
  const loader = urlFor(aboutData.image).url()
  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4' >
      <Suspense fallback={<p>loading</p>}>
        <Hero  datas={headerData}/>
        <About data={aboutData}/>
        <AxesHome datas={axesData}/>

        <p className="text-4xl text-center w-full">Carte du burkina faso</p>
        <div className="w-full h-[100vh] flex items-center justify-center relative">
          <Image
            src={loader}
            style={{objectFit:'contain'}}
            fill

          />
        </div>
      </Suspense>
    </div>
  );
}
