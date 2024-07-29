

import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='w-full max-w-xl mb-8'>
            <h2 className='mb-2 text-xl font-semibold'>{project.title}</h2>
            <p className='mb-2 text-neutral-500 italic'>{project.timeSpan}</p>
            <p className='mb-4 text-neutral-400 whitespace-pre-line'>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
