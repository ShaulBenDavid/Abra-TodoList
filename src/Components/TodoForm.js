import React, { useState } from 'react';
import FormCss from './TodoForm.module.css';

const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({ text: todoValue, 
            isComplete: false
        });
        setTodoValue('');
    }
    return (
        <div className={FormCss.formContainer}>
            <input
                value={todoValue}
                className={FormCss.addTodo}
                type="text"
                placeholder='Write a new todo...'
                onChange={(event) => setTodoValue(event.target.value)}
            ></input>
            <button onClick={addNewTodoHandler} className={FormCss.addBtn}>ADD</button>
        </div>
    )
}

export default TodoForm;