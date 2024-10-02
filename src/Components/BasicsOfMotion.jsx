import { easeInOut, motion } from "framer-motion";
import { backInOut } from "framer-motion/dom";
import React, { useState } from "react";

const BasicsOfMotion = () => {

    const [visible,setVisible]= useState(true);
 
  return (
    <div className="grid place-content-center h-[100vh] gap-[0.8rem]">

        <button onClick={()=> setVisible(!visible)} className="example-button">Show-Hide</button>
     
     {visible && <motion.div 
     initial ={{rotate: '0deg'}}
     animate ={{rotate: '180deg'}}
     exit ={{rotate: '0deg'}}
     transition={{
        duration: 2,
        ease: backInOut
     }}
     className="w-[150px] h-[150px] bg-black">

     </motion.div>}
       
    </div>
  )
}

export default BasicsOfMotion;