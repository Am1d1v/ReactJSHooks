import './App.css';
import { useState, useLayoutEffect, useEffect } from 'react';

function App() {

  const [value, setValue] = useState(0);

  // useEffect render
  /* useEffect(() => {
    if(value === 0){
      setValue(10 + Math.random() * 1000);
    }
  }, [value]);
  console.log('Render', value); */

  // useLayoutEffect render
  useLayoutEffect(() => {
    if(value === 0){
      setValue(10 + Math.random() * 1000);
    }
  }, [value]);
  console.log('Render', value);

  return(
    <button onClick={() => setValue(0)}>Value: {value.toFixed(0)}</button>
  )
}

export default App