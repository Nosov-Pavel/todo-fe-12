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
        const newTodos = todos.map((el) => id === el.id ? {...el, completed: !el.completed} : el)

    }

    return (
        <div className="App">
            <ol>
                {todos.map(el =>
                        <li key={el.id}>
                            <span style={el.completed ? {textDecoration: "line-through"} : {}}>
                            {el.id} {el.title} {el.completed}
                            </span>
                            <button>DELETE</button>
                            {" "}
                            <button>Done</button>
                            {" "}
                            <button>Update</button>
                        </li>
                )}

            </ol>

        </div>
    );
}

export default App;
