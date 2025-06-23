'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { useEffect,useState } from "react";
import {motion} from 'framer-motion'
import { FaChevronLeft } from "react-icons/fa";

const StudioBtn = () => {

const [data,setData] =useState(false)

  useEffect(()=>{
    fetch('/api/ip',{ cache:'no-store' })
    .then(data => data.json())
    .then(data => setData(data.isAllow))
  },[data])


  const isStudio = usePathname().includes('/studio')

  return (
    <motion.div 
       initial={{y:200,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:3}}
        viewport={{ once: true}}
        className={`fixed z-[10000] right-0 top-[50%] w-[300px] h-50 flex ${!isStudio && !data ? 'hidden': 'flex'}`}>

        <Link  href={isStudio?"/api/draft-mode/disable":'/studio'} className="absolute top-[50%] flex items-center justify-center animate-[translateRight_0.5s_5s_ease-out_forwards] hover:translate-x-[-90%] transition">
            <FaChevronLeft className="text-2xl" />
                <div href={isStudio?"/api/draft-mode/disable":'/studio'} className="zigzag border-4 border-[black] p-4 text-xl rounded-xl text-white font-rec1">{isStudio ? "Retour au siteweb" : "Acceder au BackOffice"}</div>
        </Link>



    </motion.div >
  )
}

export default StudioBtn