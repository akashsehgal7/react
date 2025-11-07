
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])

  const getdata  = async ()=> {

    
    const repons = await axios.get('https://picsum.photos/v2/list')
    setData(repons.data)
    
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h1>hello, {elem.author}, {idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App
