
import Only from "@/app/component/Only";
import dynamic from "next/dynamic"
import Intro from "../component/Home/AxesHome";
import Hero from "../component/Home/Hero";

const BurkinaFasoMap = dynamic(() => import("../component/BurkinaFasoMap"), {
  ssr: false, // Désactive le rendu côté serveur
});

export default function Home() {
  return (
    <div className='min-h-[100dvh] w-[100vw] flex flex-col gap-4' >
        <Hero/>
        <Intro/>
    </div>
  );
}
