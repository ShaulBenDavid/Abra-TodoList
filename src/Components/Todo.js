import React from "react";
import TodoCss from "./Todo.module.css";

const Todo = ({
  id,
  text,
  isComplete,
  deleteTodo,
  toggleCompleteTodo,
  ...props
}) => {
  const deleteTodoHandler = (event) => {
    event.stopPropagation();
    deleteTodo(id);
  };
  const toggleCompleteHandler = (event) => {
    toggleCompleteTodo(id);
  };

  return (
    <div
      className={
        isComplete
          ? `${TodoCss.completed} ${TodoCss.todoContainer}`
          : TodoCss.todoContainer
      }
    >
      <input
        type="checkbox"
        name="checkTodo"
        onClick={toggleCompleteHandler}
        className={TodoCss.checkBox}
        checked={isComplete}
      />
      <p className={TodoCss.myTask}>
        {text}
        <button onClick={deleteTodoHandler}>X</button>
      </p>
    </div>
  );
};

export default Todo;
