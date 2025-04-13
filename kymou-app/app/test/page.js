import PathMorph from "@/components/svgMorph/pathMorph"
import Image from "next/image"
const page = () => {

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
     <div className="w-full h-[100vh] flex items-center justify-center">
            <Image height={300} width={300} src={'/kymouLogo.svg'} className='animate-bounce'/>
        </div>
    </div>  
  )
}

export default page