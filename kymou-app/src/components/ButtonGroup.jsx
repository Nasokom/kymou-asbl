import React from 'react'
import Link from 'next/link'



const ButtonGroup = ({links}) => {

    
  return (

<div className="rounded-xl flex-shrink relative m-10 bg-[--bgColor2] p-6 flex justify-center flex-wrap gap-8 font-rec1" >   

    {
        links.map((link,i)=>{
          return (
            <Link 
                key={i}
                href={link.url} 
                className='border-4 text-center border-[--txtColor1] flex-auto p-4 transition rounded-lg uppercase hover:bg-white hover:scale-110 hover:border-[--color2] hover:text-[--color2]'
                >
                  {link.title}
                </Link>
            )

        })
    }

  </div>
  )
}



{/* <div className="flex flex-col gap-4 items-center flex-auto " key={i}>
<Link href={link.url} className='border-4 border-black flex-auto p-4 transition rounded-lg uppercase hover:bg-white hover:scale-110 hover:border-[--color2] hover:text-[--color2]'>{link.title}</Link>
</div> */}


export default ButtonGroup