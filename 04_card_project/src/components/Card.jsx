
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props.post);
    
  return (
    <div className='card'>
        <div className='top'>
          <img src= {props.brand} alt="something went wrong!" />
          <button>save <Bookmark size={15}/></button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>

          <div className='tag'> 
           <h4>{props.t1}</h4>
          <h4>{props.t2}</h4>
          </div>
        
        </div>
        <div className='bottom'>
          <div>

            <div>
           <h4>{props.pay}</h4>
           <p>{props.loction}</p>
          </div>

              <button>Apply now</button>
          </div>
         
        </div>
      </div>
  )
}

export default Card
