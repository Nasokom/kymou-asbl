
import Only from "@/components/Only";
import dynamic from "next/dynamic"
import AxesHome from "../components/Home/AxesHome";
import Hero from "../components/Home/Hero";
import { Suspense } from "react";
import Image from "next/image";
import {getHome} from "./utils/actions";
import About from "../components/Home/About";
import { urlFor } from "./utils/sanity/sanity";


export default async function Home() {
  const datas = await getHome()
  const loader = urlFor(datas.footer.image).url()
  //comment 4 launch
  return (
    <div className='min-h-[100vh] w-[100vw] flex flex-col gap-4' >
      <Suspense fallback={<div className="z-full h-full items-center justify-center">
          <Image height={300} width={300} src={'/LogoKymou.svg'}/>
      </div>}>
        <Hero  datas={datas.header}/>
        <About data={datas.about}/>
        <AxesHome datas={datas.goal}/>

        <p className="text-8xl text-center mt-36 w-full font-rec1">{datas.footer.title}</p>
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
