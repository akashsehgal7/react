import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {

  const users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661634669974-8a66dfb5fc56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
    intro: '',
    color: 'royalblue',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661578274246-4e86b839e49e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    intro: '',
    color: 'lightgreen',
    tag: 'Underserved'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661719388886-931c3cdacdbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
    intro: '',
    color: 'orange',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1713947503297-ca19bc5b6e38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    intro: '',
    color: 'lightgreen',
    tag: 'Understatus'
  },
   {
    img: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    intro: '',
    color: 'pink',
    tag: 'Completed'
  }
];
  return (
    <div>

      <Section1 users ={users}/>
      <Section2 />
    </div>
  )
}

export default App
