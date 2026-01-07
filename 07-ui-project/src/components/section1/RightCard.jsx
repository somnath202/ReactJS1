import React from 'react'
import RightCartContent from './RightCartContent'

const Images = (probs) => {

  return (
    <div className=' h-full shrink-0  w-1/3 rounded-4xl bg-gray-200 overflow-hidden relative'>
      <img className='h-full rounded-3xl w-full object-cover' src={probs.img} alt="" />
     <RightCartContent intro={probs.intro} tag={probs.tag} id = {probs.id}/>
    </div>
  )
}

export default Images
