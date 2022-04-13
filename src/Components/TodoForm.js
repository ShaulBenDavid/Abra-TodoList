import { useState } from 'react'
const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({ text: todoValue, 
                 isComplete: false });
    }
    return (
        <>
            <label>Add todo :</label><input type="text" onChange={(event) => setTodoValue(event.target.value)}></input>
            <button onClick={addNewTodoHandler}>Add</button>
        </>
    )
}

export default TodoForm;