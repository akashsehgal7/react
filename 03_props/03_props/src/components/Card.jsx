import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className='child'>
        <img src= {props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, at.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card
