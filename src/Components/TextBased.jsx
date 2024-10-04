import { easeInOut, motion, useScroll } from 'framer-motion'
import React, { useState } from 'react'


const TextBased = () => {

const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='grid place-content-center h-[100vh] gap-[0.8rem]'>
        <motion.button
        onClick={()=>setIsVisible(!isVisible)} 
        className='example-button'>Let's Go!
        </motion.button>

    {isVisible && <motion.div
       initial ={{scale:0, 
        y:0,
        rotate:'0deg'}}

       animate ={{scale:1,
         y:[0,-600,600,0],
        rotate:['10deg', '0deg']}}

       exit={{scale:0,
         rotate:'0deg'}}

       transition={{ease:easeInOut, duration: 1}} 
      className='w-64 h-64 bg-black'></motion.div>}
    </div>
  )
}

export default TextBased
