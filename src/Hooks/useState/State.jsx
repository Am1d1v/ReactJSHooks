import {useEffect, useState} from 'react';

function State() {

  const [state, setState] = useState({
    count: 0,
    isCounting: false
  })

  const [value, setValue] = useState(() => {
    const userCount = localStorage.getItem('count');
    return +userCount || 0
  });

  useEffect(() => {
  console.log(state); 
  }, [state])

  const handleCount = () => {
   setState({
    ...state,
    count: state.count + 1
   });
  }

  const handleStatus = () => {
    setState({
      ...state,
      isCounting: !state.isCounting
    });
  }
  
  return (
    <div>
      <button onClick={handleCount}>Increase</button>
      <button onClick={handleStatus}>Status</button>
      <h3>Total: {state.count}</h3>
      <h3>Status: {(state.isCounting).toString()}</h3>
    </div>
  )

}

export default State