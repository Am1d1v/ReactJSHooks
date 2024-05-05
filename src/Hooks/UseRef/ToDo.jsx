import { useState, useEffect, useRef } from "react"

function ToDo() {

    // Loading status
    const [loading, setLoading] = useState(true);

    const [todo, setTodo] = useState({});

    const isMounted = useRef(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    if(isMounted.current){
                        setTodo(data);
                        setLoading(false);
                    }
                }, 3000);
            }, [isMounted]);
        
        // Runs when component is unmounted
        return () => {
            isMounted.current = false;
        }    
            
    }, [])

    return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default ToDo