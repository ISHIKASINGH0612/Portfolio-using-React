import React from 'react';
import { GrGithub } from 'react-icons/gr';
import { VscCode } from 'react-icons/vsc';

const Tools = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Tools and Platform</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'> {/* Added flex and gap classes */}
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <GrGithub className='text-7xl' style={{ color: '#ffffff' }} /> 
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <VscCode className='text-7xl' style={{ color: '#007ACC' }} /> 
        </div>
      </div>  
    </div>
  );
}

export default Tools;
