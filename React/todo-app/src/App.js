// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Tarea from "./components/Tarea";

function App() {

  const [totalTarea, setTotalTarea] = useState(3)

  const addTodo = ()=>{
    const tarea = prompt("Titulo de tarea: ")
    console.log("Se agrega esta tarea: ", tarea)
    setTotalTarea((prev) => prev + 1)

  }

  return (
    <div className="App">
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <div className="flow-right controls">
          <span>Item count: <span id="item-count">{totalTarea}</span></span>
          <span>Unchecked count: <span id="unchecked-count">3</span></span>
        </div>
        
        <button className="button center" onClick={addTodo}>Agregar Tarea</button>
        
        
        <ul id="todo-list" className="todo-list">
          <Tarea />
          <Tarea />
          <Tarea />
          <Tarea />
          <Tarea />
          <Tarea />
          
          
        </ul>
      </div>
    </div>
  );
}

export default App;
