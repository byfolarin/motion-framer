import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const ViewBasedAnimation = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)


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
        className='h-[100vh] bg-red-500'
        transition = '1s background'
        
        ref={ref}
        />
    </div>
  )
}

export default ViewBasedAnimation
