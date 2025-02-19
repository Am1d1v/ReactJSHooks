import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemo() {

  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  })

  const onClick = () => {
    setIncrement(previousState => {
      console.log(previousState);
      return previousState + 1;
    })
  }

  return (
    <div>
      <input type="number" value={number} className='form-control w-25' onChange={(e) => setNumber(e.target.value)}/>
      <h2 className='my-3'>
        Sqrt of {number} is : {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>Rerender</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(number){
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }

  console.log('Expensive function called');
  return Math.sqrt(number)
}

export default UseMemo