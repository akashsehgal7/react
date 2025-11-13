

const Navbar = (props) => {
    function changeTheme(){
    
        props.setTheme('Dark')
        
    }
    
  return (
    <div>
      <button onClick={changeTheme}>Click</button>
    </div>
  )
}

export default Navbar
