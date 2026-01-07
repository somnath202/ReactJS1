import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (probs) => {

  return (
    <div className='gap-10 px-18  pb-7 flex  justify-between h-[88vh] '>
      <LeftContent/>
      <RightContent users={probs.users}/>
    </div>
  )
}

export default Page1Content
