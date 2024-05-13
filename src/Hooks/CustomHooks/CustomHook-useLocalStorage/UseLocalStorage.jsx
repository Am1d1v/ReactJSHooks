import {useState} from 'react'

function UseLocalStorage() {

    const [task, setTast] = useState('');

    return (
      <form className='w-25'>
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input type="text" value={task} onChange={(e) => setTast(e.target.value)} />
        </div>
      </form>
    )
}

export default UseLocalStorage