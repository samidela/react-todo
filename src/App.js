import React, { useState } from 'react';
import './App.css';

// Importing Components 
import Form from "./Components/Form"
import TodoList from './Components/ToDoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Sami's ToDo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText} />
      <TodoList
        todos={todos}
        setTodos={setTodos} />
    </div>
  );
}

export default App;