import "./Todo.css";
const Todo = ({id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props}) => {

    const deleteTodoHandler = (event) => {
        console.log("test 1");
        console.log("test 2");
        console.log("test 3");
        console.log("test 4");
        // event.stopPropagation();
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