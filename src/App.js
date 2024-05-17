import './App.css';
import { useState } from 'react';
import { usePrevious } from './Hooks/CustomHooks/CustomHook-usePrevious/useprevious';
import { useSaveLocalStorage } from './Hooks/CustomHooks/CustomHook-useSaveLocalStorage/useSaveLocalStorage';

function App() {

  const [count, setCount] = useSaveLocalStorage(0, 'count');

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