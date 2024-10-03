import { easeInOut, motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const ViewBasedAnimation = () => {

    const ref = useRef(null)
    const isInView = useInView(ref,{once: true})


    useEffect(()=>{
        console.log('isInview', isInView)
    },[isInView])


  return (
    <div >

        <div className=" h-[150vh] ">

        </div>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='h-[100vh] bg-black'>

        </motion.div>

        <div
        ref={ref}
        className={`h-[100vh] ${isInView ? "bg-blue-500" : "bg-red-500"}`}
         transition={{
            duration: 1,
            ease: easeInOut
          }}
        
        
        />
    </div>
  )
}

export default ViewBasedAnimation
