import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-5 justify-center p-4'>
      <Link className='text-xl font-semibold' to={'/product/men'} >Men</Link>
      <Link className='text-xl font-semibold' to={'/product/women'}>Women</Link>
      <Link className='text-xl font-semibold' to={'/product/kids'}>kids</Link>
    </div>
    <Outlet />
    </div>
    
  )
}

export default Product
