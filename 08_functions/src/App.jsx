import React from 'react'

const App = () => {
   const onwheeling = (val)=> {
    if(val > 0) {
     console.log("Sidha scrolling",val);
    }
    else
    {
     console.log("Ultha scrolling",val);
    }
    
  }
  return (
   <div onWheel={(elem)=>{
    onwheeling(elem.deltaY)
   }}>

    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
   </div>
  )
}

export default App
