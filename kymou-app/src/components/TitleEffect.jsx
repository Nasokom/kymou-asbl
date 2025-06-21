'use client'

import {motion} from 'framer-motion'

const TitleEffect = ({children,className='',big=false}) => {

  return (

    <h3 className={`overflow-hidden text-center sub flex relative w-full text-5xl font-rec1 ${big ? 'bigSub' : 'sub'} ${className}` }>  
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
        className={`h-1 w-full bg-black absolute bottom-0 left-0`}/>
    </h3>
    
  )
}

export default TitleEffect