import React, { useState } from "react";
import "./App.css";
import Inputcontainer from "./components/Inputcontainer";
import Todocontainer from "./components/Todocontainer";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function collectTodos() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  console.log(todos);

  return (
    <div className="bg-container">
      <h1>To Do Lits</h1>

      <Inputcontainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        collectTodos={collectTodos}
      />

      <Todocontainer todos={todos} delTodo={delTodo} />
    </div>
  );
}

export default App;
