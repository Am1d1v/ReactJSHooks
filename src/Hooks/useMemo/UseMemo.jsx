import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemo() {

  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  })
    
  return (
    <div>
      <input type="number" value={number} className='form-control w-25' onChange={(e) => setNumber(e.target.value)}/>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

export default UseMemo