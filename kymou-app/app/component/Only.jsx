'use client'
import React, {useState, useEffect} from 'react'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import Lottie from "lottie-react";
import animeLottie from "./anime.json";
import zoom from "./zoom.json";

const Only = () => {

    const [show1,setShow1] = useState(true)
    const [show,setShow] = useState(true)

    const [current,setCurrent] = useState(0)

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
    

      useEffect(()=>{


      },[])

      function changePosition(direction){

        if (direction == '+' && current < 5){
          setCurrent(current+1)
        }

        else if(direction == '-' && current > 0){
          setCurrent(current-1)
        }
      }


  return (
    <main className={styles.main}>
      


      <button 
        onClick={()=>changePosition('-')} 
        style={{opacity:current>0?'1':'0.2'}}
        className={styles.arrow}
      >
        {'<'}
      </button>

   {show && <div className={styles.helperBox} >

   { show1 ? <div className={styles.helper}  onClick={()=>setShow1(false)}>
        

            <h1 className={styles.helpText}></h1>
            
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

    <div className={styles.imgContainer}>
      {images.map((img,i)=>{

        return(
          <div className={styles.imgBox} 
          style={{minWidth:`${img.size*100}%`, transform : `translateX(-${current*430}px)`}} 
          key={i}>
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
      </div>

      <button 
        onClick={()=>changePosition('+')} 
        style={{opacity:current<5?'1':'0.2'}}
        className={styles.arrow}
       >  
        {'>'}
        </button>


  </main>
  )
}

export default Only