import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { motion } from 'framer-motion';



const iconVariant=(duration)=>(
  {
    initial:{y:-10},
    animate:{
      y:[10 ,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
      }
    },
  }
)

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center items-center justify-center gap-4  text-4xl'>Technologies</h1>    
        <div className='flex flex-wrap item-center justify-center gap-4'>
          <motion.div 
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"

          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </motion.div>
          <motion.div
           variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-600'/>
          </motion.div>
          <motion.div   variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-neutral-500'/>
          </motion.div>
          <motion.div 
           variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbSql className='text-7xl text-red-600'/>
          </motion.div>
              
        </div>  
    </div>
  )
}

export default Technologies
