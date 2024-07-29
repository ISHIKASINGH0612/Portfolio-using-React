import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center items-center justify-center gap-4  text-4xl'>Technologies</h1>    
        <div className='flex flex-wrap item-center justify-center gap-4'>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-600'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-neutral-500'/>
          </div>
          <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbSql className='text-7xl text-red-600'/>
          </div>
              
        </div>  
    </div>
  )
}

export default Technologies
