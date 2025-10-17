import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card user = 'Aman singh' age = {18} img = 'https://images.unsplash.com/photo-1760312379880-1a5623c5f835?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=804' />
       <Card user = 'shartak sharma' age = {28} img = 'https://images.unsplash.com/photo-1760463306206-b2fa488a7a44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
    </div>
  )
}

export default App
