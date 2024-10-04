import { motion } from 'framer-motion'
import React from 'react'

const TextBased = () => {
  return (
    <div className='grid place-content-center h-[100vh] gap-[0.8rem]'>
      <motion.div className='w-64 h-64 bg-black'></motion.div>

      <motion.div></motion.div>
    </div>
  )
}

export default TextBased
