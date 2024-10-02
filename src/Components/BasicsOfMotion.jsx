import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { backInOut } from "framer-motion/dom";
import React, { useState } from "react";

const BasicsOfMotion = () => {

    const [visible,setVisible]= useState(true);
 
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">

    <motion.button
    layout
     onClick={()=> setVisible(!visible)} className="example-button">
    Show-Hide</motion.button>
     

     <AnimatePresence mode='popLayout'>
            {visible && <motion.div 
            initial ={
                {rotate: '0deg',
                 scale: 0,
                 y:0
                }}
            animate ={
                {rotate: '180deg', 
                scale: 1,
                y:[0, 150, -150, -150, 0]
            }}
            exit ={
                {rotate: '0deg', 
                scale: 0,
                y:0
            }}
            transition={{
                duration: 1,
                ease: backInOut,
                times: [0, 0.25, 0.5, 0.85, 1 ]
            }}
            className="w-[150px] h-[150px] bg-black">
            </motion.div>}
     </AnimatePresence>
       
    </div>
  )
}

export default BasicsOfMotion;