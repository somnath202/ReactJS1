import React from 'react'
import { useState } from 'react';

const App = () => {
  const [first , setfirst] = useState(1000)
  const [username , setusername] = useState("Somnath")

  function ChangeNum(){
    setfirst(30)
    setusername("Somnath Khamkar")
    console.log(first);
    
  }
  return (
    <div className='bg-pink-400 h-screen pt-0'>
      <div>
        <h1 className='text-5xl text-center m-5'>Result</h1>
        <h1 className='bg-gray-300 p-10 m-10 size-fix text-center'> name of user is {username} </h1>
        <button 
        className='py-[10px] px-[20px] m-2 rounded-xl bg-[#3a3a3a] text-white border'
        onClick={ChangeNum}  >click</button>
      </div>

      <hr />
      <div className='flex justify-center p-10'>
        <button className='py-[10px] px-[20px] m-2 rounded-xl bg-[#3a3a3a] text-white border' 
          onClick={()=>{
            setfirst(first+1);
          }}
        > Increase</button>

        <button className='py-[10px] px-[20px] m-2 rounded-xl bg-[#3a3a3a] text-white border'
          onClick={()=>{
            setfirst(first-1);
          }}
        > Decrease</button>
        <button className='py-[10px] px-[20px] m-2 rounded-xl bg-[#3a3a3a] text-white border'
          onClick={()=>{
            setfirst(first+5);
          }}
        > jump by five</button>

      </div >
        <div className='m-20 p-20 size-fit text-center bg-gray-300 rounded-xl text-9xl flex justify-center items-center'>
          <h1>{first}</h1>
        </div>
    </div>

    
  )
}

export default App
