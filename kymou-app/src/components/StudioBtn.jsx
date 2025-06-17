'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { useEffect,useState } from "react";
import { BASE_URL } from "@/utils/constants";


const StudioBtn = () => {

const [data,setData] =useState(false)

  useEffect(()=>{
    fetch(BASE_URL+'/api/ip')
    .then(data => data.json())
    .then(data => setData(data.isAllow))
  },[])

  const isStudio = usePathname().includes('/studio')

  return (
    <div className={`fixed z-[10000] right-0 top-[50%] w-[210px] h-50 flex ${!isStudio && !data ? 'hidden': 'flex'}`}>


        <div className="absolute top-[50%] left-[-50px]">
                <Link href={isStudio?"/api/draft-mode/disable":'/studio'}className="zigzag border-4 p-4 text-xl rounded-xl text-white font-rec1">{isStudio ? "Retour au siteweb" : "Acceder au BackOffice"}</Link>
        </div>



    </div>
  )
}

export default StudioBtn