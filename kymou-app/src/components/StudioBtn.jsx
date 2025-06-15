'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link'


const StudioBtn = () => {

  const isStudio = usePathname().includes('/studio')

  return (
    <div className='fixed z-[10000] right-0 top-[50%] w-[210px] h-50 flex'>


        <div className="absolute top-[50%] left-[-50px]">
                <Link href={isStudio?"/":'/studio'}className="zigzag border-4 p-4 text-xl rounded-xl text-white font-rec1">{isStudio ? "Retour au siteweb" : "Acceder au BackOffice"}</Link>
        </div>



    </div>
  )
}

export default StudioBtn