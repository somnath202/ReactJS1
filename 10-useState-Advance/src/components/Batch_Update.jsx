import React, { useState } from 'react'
// Batch update using functional update form of setState
// when we have to update state multiple times based on previous state value
// then we should use functional update form of setState
// because react batches multiple state updates into a single re-render for performance optimization
// in such cases if we use direct state update form then all updates will refer to the same previous state value
// leading to incorrect final state after all updates are applied
// using functional update form ensures each update correctly references the most recent state value

const Batch_Update = () => {
    const [num, setnum] = useState(10)

    const btncliked = () => {
        setnum(prev=>prev+1)
        setnum(prev=>prev+1)
        setnum(prev=>prev+1)
        setnum(prev=>prev+1)
        setnum(prev=>prev+1)
    }
    return (
        <div>
            <h1 className='m-10 p-10 bg-pink-300 size-fix w-140 text-center rounded-3xl text-5xl'>{num} </h1>
            <button className='bg-gray-500 p-5 m-10 rounded-xl' onClick={btncliked} >click</button >
        </div>
    )
}

export default Batch_Update
