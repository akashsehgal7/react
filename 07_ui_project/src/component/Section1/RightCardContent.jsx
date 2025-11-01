import React from 'react'

const RightCardContent = (props) => {
  
  return (
   <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>

            <h2 className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>{props.id}</h2>
           <div>
            <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequuntur est magnam, quidem eius magni.</p>
            <div className='flex justify-between  '>
                <button style={{backgroundColor:props.color}} className='px-8 py-2 text-white font-medium rounded-full cursor-pointer hover:scale-110'> {props.tag} </button>
                <button className='bg-blue-600 px-3 py-2 text-white font-medium rounded-full cursor-pointer hover:scale-110'><i className="ri-arrow-right-line"></i></button>
          </div>
        
         </div>
      </div> 
  )
}

export default RightCardContent
