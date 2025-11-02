import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  function increaseNum(val){
   setnum(num+1)
  }
  function decreaseNum(val){
    setnum(num-1)
    
  }
  function jump5Num(val){
    setnum(num+5)
    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={(elem)=> {
        decreaseNum(elem)
      } }>decrease</button>
      <button onClick={(elem)=> {
        increaseNum(elem)
      }}>increase</button>
      <button onClick={jump5Num}>increase by 5</button>
    </div>
  )
}

export default App
