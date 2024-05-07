import {useState, useCallback} from 'react'

function UseCallback() {

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks(prev => [...prev, 'New Task, ']);
    };

    return (
      <div>
        <Button addTask={addTask}/>
        <h3>{tasks}</h3>
      </div>
    )
}

const Button = ({addTask}) => {
    console.log('Button rendered');

    return (
        <div>
            <button className='btn btn-primary' onClick={addTask}>Add Task</button>
        </div>
    )
}

export default UseCallback