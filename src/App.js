import "./App.css";
import TodoList from "./Components/TodoList";
import React from "react";

import TodoForm from "./Components/TodoForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="TodoApp">
      <Header />
      <div className="container">
        <TodoList />
        <TodoForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
