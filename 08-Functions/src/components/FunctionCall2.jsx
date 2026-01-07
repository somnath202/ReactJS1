import React from 'react'

const FunctionCall2 = () => {
  return (
    <div onWheel={(el)=>{
        console.log(el.deltaY)
    }}>
      <div className='min-h-screen min-w-full bg-red-300 '> </div>
      <div className='min-h-screen min-w-full bg-gray-300 '> </div>
      <div className='min-h-screen min-w-full bg-red-300 '> </div>
    </div>
  )
}

export default FunctionCall2
