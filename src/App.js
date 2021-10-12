import React, { useEffect, useState } from 'react';
import './App.css';
// importing components
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {

  })
  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  // Functions and Events
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
  }
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todo'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Matthew's To-Do List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <ToDoList filteredTodos ={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

