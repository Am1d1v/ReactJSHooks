import './App.css';
import { useState, useLayoutEffect, useEffect } from 'react';

function App() {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if(value === 0){
      setValue(10 + Math.random() * 100);
    }
  }, [value]);
  console.log('Render', value);

  return(
    <button onClick={() => setValue(0)}>Change Value</button>
  )
}

export default App