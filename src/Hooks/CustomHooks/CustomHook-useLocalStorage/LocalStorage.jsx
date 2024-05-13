import useLocalStorage from "./useLocalStorage";

function UseLocalStorage() {

    const [task, setTast] = useLocalStorage('task', '');

    return (
      <form className='w-25'>
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input className='w-50' type="text" value={task} onChange={(e) => setTast(e.target.value)} />
        </div>
      </form>
    )
}

export default UseLocalStorage