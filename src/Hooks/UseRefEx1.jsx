import {useRef} from 'react'

function UseRefEx1() {

  const inputReference = useRef();
  const pararef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    inputReference.current.value = 'Input Value';
    inputReference.current.style.backgroundColor = 'black';
    inputReference.current.style.color = 'white';
    pararef.current.innerText = 'Text';
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" className='form-control mb-2' id='name' ref={inputReference}/>
      <button type="submit" className='btn btn-primary'>Submit</button>
      <p ref={pararef} onClick={() => inputReference.current.focus()}></p>
    </form>
  )
}

export default UseRefEx1