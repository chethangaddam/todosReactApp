import React from "react";
import Todo from "./Todo";

function Todocontainer({todos, delTodo}) {
  return (
    <div className="todo-container">
      {todos.map((todo, index) =>{
        return(
            <Todo todo={todo} index={index} delTodo={delTodo}/>
        )
      })}
    </div>
  );
}

export default Todocontainer;
