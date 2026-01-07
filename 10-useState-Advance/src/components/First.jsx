import React, { useState } from 'react'

const First = () => {
    const [obj, setobj] = useState({ name: "Alice", age: 20 })
    const btncliked = () => {
        const newObj = { ...obj }
        newObj.name = "Aman"
        newObj.age = obj.age + 5
        setobj(newObj)
    }
    return (
        <div>
            <h1 className='m-10 p-10 bg-pink-300 size-fix w-140 text-center rounded-3xl'>user is {obj.name} , age is {obj.age} </h1>
            <button className='bg-gray-500 p-5 m-10 rounded-xl' onClick={btncliked} >click</button >
        </div>
    )
}

export default First
