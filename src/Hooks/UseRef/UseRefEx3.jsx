import {useState} from 'react'
import ToDo from './ToDo'


function UseRefEx3() {

  const [showToDo, setShowToDo] = useState(true);

  console.log(showToDo);
    
  return (
    <div>
      {showToDo && <ToDo />}
      <button className='btn btn-primary' onClick={() => setShowToDo(!showToDo)}>Toggle ToDo</button>
    </div>
  )
}

export default UseRefEx3