import React from 'react';
import { CORE_SUBJECTS } from '../constants'; // Adjust path as necessary

const CoreSubjects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Core Subjects</h1>
      <ul className='list-disc list-inside text-neutral-400 text-center'>
        {CORE_SUBJECTS.map((subject, index) => (
          <li key={index} className='mb-2'>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreSubjects;
