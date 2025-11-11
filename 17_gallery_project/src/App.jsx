import { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {
  
  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)
  const getdata = async ()=> {

    const respons = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserdata(respons.data)
    
    
  }
  useEffect(function(){
    getdata()
  },[index])
  let printUserdata = <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 font-semibold">Loding...</h3>
  if(userdata.length > 0) {
    printUserdata = userdata.map(function(elme,idx){
      
     return <div key={idx}>
      <a href={elme.url} target="_blank">
        <div className="h-44 w-48 bg-white rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover" src={elme.download_url} alt="" />
      </div>
      
      <h2 className="font-bold text-lg ">{elme.author} </h2>
        </a>

      </div>
      
    })
  }
  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto">
      

      <div className="flex flex-wrap rounded-xl gap-4">{printUserdata} </div>

      <div className="flex justify-center items-center gap-4">
        <button style={{opacity: index == 1 ? 0.5 : 1}} className="bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95" onClick={()=> {
          
          if(index > 1)
          setIndex(index-1)
        setUserdata([])
          
        }}>Prev</button>
        <h4>page {index} </h4>
        <button className="bg-amber-400 text-black px-4 py-2 rounded font-semibold text-sm cursor-pointer active:scale-95" onClick={()=> {
        
          setIndex(index+1)
          setUserdata([])

        }}>Next</button>
      </div>
    </div>
  )
}

export default App
