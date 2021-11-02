import './App.css';
import {useState} from "react";


const unitialState = [
    {
        "id": 16,
        "title": "delectus aut autem",
        "completed": true
    },
    {
        "id": 23,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "id": 37,
        "title": "fugiat veniam minus",
        "completed": false
    },
]

function App() {
    const [todos, setTodos] = useState(unitialState)
    const completeTask = (id) => {
        const toDo = todos.map(el => el.id === id ? {...el, completed: !el.completed} : el)
        setTodos(toDo)
    }

    return (
        <div className="App">
            <ol>
                {todos.map(el =>
                    <li key={el.id}>
                            <span style={el.completed ? {textDecoration: "line-through"} : {}}>
                            {el.id} {el.title} {el.completed}
                            </span>

                        <button onClick={() => completeTask(el.id)}>Completed</button>
                        {" "}
                        <button>DELETE</button>
                        {" "}
                        <button>Update</button>
                    </li>
                )}

            </ol>

        </div>
    );
}

export default App;
