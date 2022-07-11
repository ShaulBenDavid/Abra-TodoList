import React from "react";
import { useDispatch } from "react-redux";
import { todoIsCoplete, removeTodo } from '../Redux/todoListSlice';
import TodoCss from "./Todo.module.css";

const Todo = ({
  id,
  text,
  isComplete,
  ...props
}) => {

  const dispatch = useDispatch();
  // Delete Todo
  const deleteTodoHandler = (event) => {
    event.stopPropagation();
    dispatch(removeTodo(id));
  };
  // Toggle Completed
  const toggleCompleteHandler = (event) => {
    dispatch(todoIsCoplete(id));
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
        checked={isComplete}
        onChange={toggleCompleteHandler}
        className={TodoCss.checkBox}
      />
      <p className={TodoCss.myTask}>
        {text}
        <button onClick={deleteTodoHandler}>X</button>
      </p>
    </div>
  );
};

export default Todo;
