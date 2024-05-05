import {useRef} from 'react'

function UseRefEx1() {

  const inputReference = useRef();

  return (
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" className='form-control mb-2' id='name'/>
      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default UseRefEx1