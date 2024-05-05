import {useState} from 'react'
import ToDo from './ToDo'


function UseRefEx3() {

  const [showToDo, setShowToDo] = useState(true);

    
  return (
    <div>
      {showToDo && <ToDo />}
      <button className='btn btn-primary'>Toggle ToDo</button>
    </div>
  )
}

export default UseRefEx3