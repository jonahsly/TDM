import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
// import './App.css';

const todo = [
  { text: 'cortar cebolla', completed: false},
  { text: 'Tomar curso Introducción a React', completed: false},
  { text: 'Revisar tareas pendientes', completed: false}
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        {todo.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      
      <CreateTodoButton />
    
    </React.Fragment>
  );
}

export default App;
