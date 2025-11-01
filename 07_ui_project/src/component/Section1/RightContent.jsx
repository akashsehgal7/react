import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap overflow-x-auto gap-10 rounded-4xl'>
      {props.users.map(function(elem, idx){
        return <RightCard key= {idx} id={idx+1} img={elem.img} color={elem.color} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
