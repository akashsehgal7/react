import React from 'react'

const App = () => {
  const submitHandler = (val)=> {
    val.preventDefault(val);
    console.log("Form submited...");
    
  }
  return (
    <div>
      <form onSubmit={(e)=> {
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter somthing' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
