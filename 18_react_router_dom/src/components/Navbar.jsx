import React from 'react'
import { Link } from 'react-router-dom'

const Nevbar = () => {
  return (
    <div className='nav'>
        <h3>sheryians</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Product'>Product</Link>
        </div>
      
      </div>
  )
}

export default Nevbar
