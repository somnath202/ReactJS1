import React from 'react'
import Images from './RightCard'


const RightContent = (probs) => {

  return (
    <div id='right' className=' overflow-x-auto  p-4 flex flex-nowrap justify-between items-center w-2/3 gap-9 '>
      {probs.users.map(function(user , idx){
        return <Images img={user.img} tag={user.tag} intro={user.intro} key={idx} id={idx}  />
      })}
    </div>
  )
}

export default RightContent
