import Todo from "./Todo";
import React from "react";
import TodoListCss from "./TodoList.module.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className={TodoListCss.listContainer}>
      <h2 className={TodoListCss.myTodos}>My todos:</h2>
      {todos.map((todo, idx) => {
        return (
          <Todo
            key={idx}
            id={idx}
            isComplete={todo.isComplete}
            text={todo.text}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
