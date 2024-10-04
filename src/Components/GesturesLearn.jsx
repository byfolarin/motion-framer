import { motion } from 'framer-motion'
import React from 'react'


const GesturesLearn = () => {
  return (
    <div>
        <motion.button 
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95, rotate: '2.5deg'
          }}
          
          className='example-button' >Click Me!
          </motion.button>
    </div>
  )
}

export default GesturesLearn
