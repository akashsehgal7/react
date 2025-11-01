import React from 'react'
import LeftContnet from './LeftContnet'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  return (
    <div className='px-18 py-10 h-[90vh] flex justify-between'>
      <LeftContnet />
      <RightContent users= {props.users}/>
    </div>
  )
}

export default Page1Content
