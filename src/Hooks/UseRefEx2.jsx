import {useState, useEffect, useRef} from 'react'

function UseRefEx2() {

    const [name, setName] = useState('');
    const renders = useRef(1);
    // Previous value
    const prevName = useRef('');

    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;
    }, [name]);

  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <h2>Previous Name Value: {prevName.current}</h2>
        <input type="text" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default UseRefEx2