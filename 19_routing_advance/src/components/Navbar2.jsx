import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const naveget = useNavigate()
  return (
    <div>
      <button onClick={()=> {
        naveget('/')
        
      }} className='py-2 px-4 bg-amber-500 m-4 rounded font-medium cursor-pointer active:scale-95'>return to Home</button>
      <button onClick={()=> {
        naveget(-1)
      }} className='py-2 px-4 bg-amber-500 m-4 rounded font-medium cursor-pointer active:scale-95'>Back</button>
       <button onClick={()=> {
        naveget(+1)
      }} className='py-2 px-4 bg-amber-500 m-4 rounded font-medium cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
