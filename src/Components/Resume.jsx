import React from 'react'
import resume from '../assets/F5.pdf'

const Resume = () => {
  return (
    <div className="flex justify-center items-center py-7">
      <a 
        href={resume}
        download='resume'
        className='
          bg-[#465697]
          px-4
          py-2
          rounded-lg 
          text-white 
          hover:bg-stone-600 
          hover:scale-105 
          hover:shadow-lg 
          active:scale-95 
          transition-all 
          duration-300 
          ease-in-out 
          transform 
          group 
          relative 
          overflow-hidden
          mx-4'
      >
        <span className='
          relative 
          z-10 
          group-hover:text-opacity-80 
          transition-opacity 
          duration-300
        '>
          Download Resume!
        </span>
        <span className='
          absolute 
          inset-0 
          bg-stone-700 
          opacity-0 
          group-hover:opacity-20 
          transition-opacity 
          duration-300 
          rounded-lg'
        ></span>
      </a>
    </div>
  )
};

export default Resume;