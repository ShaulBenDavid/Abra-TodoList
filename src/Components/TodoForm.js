import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../Redux/todoListSlice";
import FormCss from "./TodoForm.module.css";

const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const addNewTodoHandler = (event) => {
    dispatch(
      addNewTodo({
        text: todoValue,
        isComplete: false,
      })
    );
    setTodoValue("");
  };
    
  return (
    <div className={FormCss.formContainer}>
      <input
        value={todoValue}
        className={FormCss.addTodo}
        type="text"
        placeholder="Write a new todo..."
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <button onClick={addNewTodoHandler} className={FormCss.addBtn}>
        ADD
      </button>
    </div>
  );
};

export default TodoForm;
