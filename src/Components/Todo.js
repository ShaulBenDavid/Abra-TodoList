import "./Todo.css";
const Todo = ({id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props}) => {

    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
    const toggleCompleteHandler = (event) => {
        toggleCompleteTodo(id);
    }
    return (
        <div className={isComplete ? "completed" : ""}>
            <p onClick={toggleCompleteHandler}>{text}<button onClick={deleteTodoHandler}>X</button></p>
        </div>
    )
}

export default Todo;