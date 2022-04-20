import './App.css';
import TodoList from './Components/TodoList';
import React, { useState } from 'react';

import TodoForm from './Components/TodoForm';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  const [todos, setTodos] = useState(() =>[]);
  
  const addNewTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    console.log({todo});
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);  
    console.log(newTodos);
    setTodos(newTodos);

  }

  const ToggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isComplete = !newTodos[id].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="TodoApp">
      <Header />
      <div className='container'>
        <TodoList todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleteTodo={ToggleComplete}
        />
        <TodoForm addNewTodo={addNewTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
