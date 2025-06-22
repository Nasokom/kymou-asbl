'use client'

import {motion} from 'framer-motion'

const TitleEffect = ({children,className='',big=false}) => {

  return (

    <h3 className={`overflow-hidden text-center flex relative w-full font-rec1
 ${big ? 'text-8xl max-[800px]:text-5xl' : 'text-7xl max-[800px]:text-4xl'}    
      ${className}` }>  
        <div className='opacity-0'>{children}</div>
        <motion.div
            className={`absolute top-0 w-full`}
            initial={{y: "100%"}}
            whileInView={{y:"0%"}}
            //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
            viewport={{ once: true,amount:'some'}}
            transition={{ duration: 0.3,}}
        >
           <div > {children}</div> 
        </motion.div>
        
        <motion.span 
        initial={{scaleX: 0}}
        whileInView={{scaleX:1}}
        //animate={{ opacity: 1, scale: 1 ,y:"0%"}}
        viewport={{ once: true,amount:'some'}}
        transition={{ duration: 0.3,}}
        className={`h-1 w-full bg-[--txtColor1] absolute bottom-0 left-0`}/>
    </h3>
    
  )
}

export default TitleEffect