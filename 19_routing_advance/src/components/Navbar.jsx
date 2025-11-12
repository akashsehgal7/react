import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-900 py-4 px-8 flex items-center justify-between'>
      <h1>Sheryians</h1>
      <div className='flex gap-5'>
  
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/courses'}>Courses</Link>
        <Link to={'/product'}>Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
