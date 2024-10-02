import { motion } from 'framer-motion'
import React from 'react'

const AnimationControls = () => {
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
     


        <button className='example-button'>Flip it!</button>
        
        <motion.div className='w-[150px] h-[150px] bg-black'>
            
        </motion.div>

    </div>
  )
}

export default AnimationControls
