import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCartContent = (probs) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full  '>
        <div>
          <h1 className=' flex items-center justify-center h-12 w-12 m-10 mt-10 bg-white size-fit text-2xl rounded-full '>{probs.id+1}</h1>
          <p className='p-10 mt-55 text-white leading-relaxed w-[90%] text-shadow-2xs'>{probs.intro}</p>
        </div>
        <div className='flex items-center justify-between m-10 mt-20 p-2 mt-0 bg-blue-300 rounded-3xl'>
          <button>{probs.tag}</button>
          <button><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RightCartContent
