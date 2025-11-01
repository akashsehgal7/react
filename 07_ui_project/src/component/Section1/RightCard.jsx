import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  console.log(props.color);
  
  return (
    <div className='h-full  w-70 bg-red-500 rounded-4xl overflow-hidden relative shrink-0 '>
      <img className='h-full w-full object-cover  ' src={props.img} alt="" />
      
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
 </div>
       
  )
}

export default RightCard
