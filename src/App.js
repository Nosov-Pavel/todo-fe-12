import './App.css';
import {useState} from "react";


  const unitialState = [
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
  ]
function App() {
    const [todos, setTodos] = useState(unitialState)

  return (
    <div className="App">
        <ol>
        {todos.map((el => <li key={el.id}>{el.title}</li>))}
        </ol>

    </div>
  );
}

export default App;
