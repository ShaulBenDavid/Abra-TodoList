import Todo from './Todo';
import React from 'react';
import TodoListCss from './TodoList.module.css'
const TodoList = ({todos, toggleCompleteTodo, deleteTodo, ...props}) => {
    return (
        <div className={TodoListCss.listContainer}>
            <h2 className={TodoListCss.myTodos}>My todos:</h2>
            {todos.map( (todo,idx) => {
                return <Todo key={idx} 
                             id={idx} 
                             isComplete={todo.isComplete} 
                             text={todo.text} 
                             deleteTodo={deleteTodo}
                             toggleCompleteTodo={toggleCompleteTodo} />
            })}
        </div>
    );
} 

export default TodoList;
