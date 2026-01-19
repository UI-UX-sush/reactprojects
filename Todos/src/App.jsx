import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text,setText]=useState('')

 const AddTodo=()=>{

  setTodos([...todos,{
    text:text,
        completed: false}]);  
  setText("");

  }


 const ToggleTodo = (index) => {
  setTodos(
    todos.map((t, i) =>
      i === index
        ? { ...t, completed: !t.completed }   // update only one todo
        : t                                   // keep the rest untouched
    )
  );
};
   const DelTodo=(index)=>{
    setTodos(
   todos.filter((_,id)=>(id!==index)
   ))
    }

  return ( 
  <div className="todo-container">
    <h2>Todo App</h2>

    <div className="input-area">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={AddTodo}>ADD</button>
    </div>

    <ul>
      {todos.map((t, index) => (
        <li key={index}>
          <span
            className={`todo-text ${t.completed ? "completed" : ""}`}
            onClick={() => ToggleTodo(index)}
          >
            {t.text}
          </span>

          <div className="action-buttons">
            <button onClick={() => ToggleTodo(index)}>Toggle</button>
            <button onClick={() => DelTodo(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}
export default App;
