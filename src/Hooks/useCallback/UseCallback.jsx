import React, {useState, useCallback} from 'react'

function UseCallback() {

    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks(prev => [...prev, 'New Task, ']);
    }, [setTasks]);

    return (
      <div>
        <Button addTask={addTask}/>
        <h3>{tasks.map((task, index) => {
           return <p key={index}>{task}</p>
        })}</h3>
      </div>
    )
}

const Button = React.memo(({addTask}) => {
    console.log('Button rendered');

    return (
        <div>
            <button className='btn btn-primary' onClick={addTask}>Add Task</button>
        </div>
    )
});

export default UseCallback