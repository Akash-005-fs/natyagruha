import React from 'react';
import { motion } from 'framer-motion';
import "../styles/land.css";

function Land() {
  return (


<div className='main'>









    <div className='mland'>
      <div className='mleft'>
        <motion.div 
          className='leftlogo' 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className='l1'></div>
        </motion.div>
        
        <motion.ol 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          <motion.li 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >NATYAGRUHA</motion.li>
          <motion.li 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1 }}
          >DANCE ACADEMY</motion.li>
          <motion.li 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1.5 }}
          >SINCE 1996</motion.li>
        </motion.ol>
      </div>

      <div className='mright'>
        <motion.div 
          className='rightlogo' 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <div className='l2'></div>
        </motion.div>
      </div>
    </div>



</div>


  );
}

export default Land;
