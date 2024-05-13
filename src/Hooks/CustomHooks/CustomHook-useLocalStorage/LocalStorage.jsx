import useLocalStorage from "./useLocalStorage";

function UseLocalStorage() {

    const [task, setTast] = useLocalStorage('task', '');

    // Array of tasts
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const onSubmit = e => {
      e.preventDefault();

      const taskObject = {
        task: task,
        completed: false,
        date: new Date().toLocaleDateString()
      }

      setTasks([...tasks, taskObject]);
    }

    return (
      <form className='w-25' onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input className='w-50' type="text" value={task} onChange={(e) => setTast(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
}

export default UseLocalStorage