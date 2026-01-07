import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const users = [
  {
    id:1,
    img:"../public/image.png" , 
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque animi in, libero delectus nulla." , 
    tag:"Underserved",
  },
  {
    id:2,
    img:"../public/image1.png" , 
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque animi in, libero delectus nulla." , 
    tag:"Satisfide",
  },
  {
    id:3,
    img:"../public/image2.png" , 
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque animi in, libero delectus nulla." , 
    tag:"Underbanked",
  },
  {
    id:3,
    img:"../public/image3.png" , 
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque animi in, libero delectus nulla." , 
    tag:"Undertaker",
  },
  {
    id:3,
    img:"../public/image4.png" , 
    intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque animi in, libero delectus nulla." , 
    tag:"Perfect",
  },
  
]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
