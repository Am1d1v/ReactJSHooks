import './App.css';
import { useState } from 'react';
import { usePrevious } from './Hooks/CustomHooks/CustomHook-usePrevious/useprevious';

function App() {

  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);
  
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>
    </div>
  )
}

export default App