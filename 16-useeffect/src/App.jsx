import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(10)
  function Achanging(){
    console.log("A is changing...");
  }

  function Bchangin(){
    console.log("B is changing...");
    
  }
  useEffect(function(){
    Achanging()
  },[a])
  useEffect(function(){
    Bchangin()
  },[b])
  return (
    <div>
      <h1>{a} </h1>
      <h1>{b} </h1>
      <button onClick={()=> {
        setA(a + 1)
      }}>Change A</button>
      <button onClick={()=> {
        setB(b + 1)
      }}>Change B</button>
    </div>
  )
}

export default App
