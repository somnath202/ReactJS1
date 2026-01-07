import React from 'react'

const Practice = () => {
  let str = "" ;
  return (
    <div>
      <div>
        <input
          onClick={(el)=>{
            str = el.target.value;
          }}
        className='m-10 border rounded-xs p-4 ' type="text"  placeholder='Enter text'/>
        <h1></h1>
      </div>
    </div>
  )
}

export default Practice
