import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10);
  const [userName, setuserName] = useState("sarthak")
  function changeNum(){
    setnum(20);
    setuserName('Aman')
  }
  return (
    <div>
      <h1>the value of num is {num} <br />the value of userName is {userName} </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
