import { useState } from "react"

const App = () => {
 const [title, setTitle] = useState('')
 const [details, setDetails] = useState('')
 const [task, setTask] = useState([])
  const submitHandler = (e)=> {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    
    console.log(task);
    
    setTitle('')
    setDetails('')
    
  }
  const NoteDelete = (idx)=> {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
  }
  return (
    <div className='h-screen bg-black text-white lg:flex' >
      <form onSubmit={(e)=> {
        submitHandler(e);
      }} className='flex flex-col gap-5 lg:w-1/2 p-10 items-start'>
          <h1 className='font-bold text-4xl'>Add notes</h1>
        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 rounded w-full outline-none font-medium bg-transparent' value={title} onChange={(e)=>{
          setTitle(e.target.value);
          
        }} />
        <textarea type="text" placeholder='write Details' className='px-5 py-2 border-2 rounded w-full outline-none h-40 font-medium bg-transparent ' value={details} onChange={(e)=> {
          setDetails(e.target.value);
          
        }}></textarea>
        <button className='px-5 py-2 rounded bg-white text-black w-full cursor-pointer outline-none font-medium active:scale-95'>Add notes</button>
      </form>
      <div className='w-1/2 p-10 lg:border-l-2'>
        <h1 className='font-bold text-3xl'>Resent notes</h1>
         <div className='flex flex-wrap gap-5 mt-6 overflow-auto h-[90] scrollbar-hide'>
          {task.map(function(elem,idx){
            return <div key={idx} className='h-52 bg-cover w-40 rounded-xl text-black py-6 px-4 flex flex-col justify-between bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-3 font-medium text-sm text-gray-600'>{elem.details} </p>
              </div>
              <button className='bg-red-500 w-full py-1 cursor-pointer active:scale-95 text-sm rounded font-bold text-white mt-3' onClick={()=> {
                NoteDelete(idx)
              }}>Delete</button>
            </div>
          })}
      </div>

      </div>
    </div>
  )
}

export default App
