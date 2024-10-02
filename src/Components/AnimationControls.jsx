import { motion,useAnimationControls } from 'framer-motion'
import React from 'react'

const AnimationControls = () => {

     const controls = useAnimationControls();

    const handleClick =()=>{
        controls.start("flip")
    }


  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">
     
        <button 
            onClick={handleClick}
            className='example-button'>Flip it!
        </button>

        <motion.div 
                variants={{initial: {rotate: '0deg'},
                           flip:{rotate: '75deg'}}}
                initial = "initial"
                animate = {controls}
                className='w-[150px] h-[150px] bg-black'>          
        </motion.div>

    </div>
  )
}

export default AnimationControls
