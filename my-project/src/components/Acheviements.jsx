import React from 'react';
import { ACHEVIEMENTS } from '../constants'; 

const Acheviements = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Achievements</h1>
      <ul className='list-disc list-inside text-neutral-400 text-center'>
        {ACHEVIEMENTS.map((achievement, index) => (
          <li key={index} className='mb-2'>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Acheviements;
