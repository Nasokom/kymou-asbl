'use client'
import React, {useState} from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import Lottie from "lottie-react";
import animeLottie from "./anime.json";
import zoom from "./zoom.json";

const Only = () => {

    const [show1,setShow1] = useState(true)
    const [show,setShow] = useState(true)

    const images =[
        {
          src:'/face1.jpg',
          size:1,
        },
        {
          src:'/full2.jpg',
          size:3,
        },
        {
          src:'/coming.png',
          size:1,
        },
        {
          src:'/face61.png',
          size:1,
        }
    
      ]
    


  return (
    <main className={styles.main}>
      
   {show && <div className={styles.helperBox} >

   { show1 ? <div className={styles.helper}  onClick={()=>setShow1(false)}>
        

            <h1> Scroll pour parcourir la plaquette</h1>
            
            <Lottie animationData={animeLottie} loop={true} />
            <button>OK</button>


    </div>
    :
    <div className={styles.helper}  onClick={()=>setShow(false)}>
        

            <h1> Zoom pour voir les details</h1>
            
            <Lottie animationData={zoom} loop={true} />
            <button>OK</button>

    </div>
    }

    </div>}

    {images.map((img,i)=>{

      return(
        <div className={styles.imgBox} style={{minWidth:`${img.size*100}vw`}} key={i}>
        <Image
          fill
          src={img.src}
          alt="Vercel Logo"
          sizes="100%"
          className={styles.img}
          priority
        />
        </div>
      )
    })}
          


  </main>
  )
}

export default Only