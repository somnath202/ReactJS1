import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
// import Navbar from './Navbar'

const section1 = (probs) => {
  
  return (
    <div>
      <section className="h-screen w-full text-black  ">
        <Navbar/>
        <Page1Content users={probs.users}/>
      </section>
    </div>
  )
}

export default section1
