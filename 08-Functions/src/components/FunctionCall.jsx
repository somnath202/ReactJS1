import React from 'react'

const FunctionCall = () => {
    const inputChanging = (el) => {
        console.log(el.target.value)
    }

    return (
        <div>
            {<button className='bg-red-500 p-10 m-10 rounded-full h-15 w-15 flex  items-center justify-center hover:bg-red-100' onMouseEnter={function () {
                console.log("Mouse Entered");
            }} onClick={function () {
                console.log("button cliked");
            }}>Click Here</button>}

            <input type="text" placeholder='Enter Your Name' className='p-4 m-10 rounded-xl bg-sky-200 hover:bg-sky-300'
                onChange={(el) => {
                    console.log(el.target.value)
                }} />

            {/* Calling External Function */}
            <input type="text" placeholder='Enter Your Name' className='p-4 m-10 rounded-xl bg-sky-200 hover:bg-sky-300'
                onChange={(el) => {
                    inputChanging(el);
                }} />

            <div className='w-150 h-150 bg-red-500 m-10'
                onMouseMove={(el) => {
                    console.log(el.clientX)
                }}
            ></div>




        </div>
    )
}

export default FunctionCall
