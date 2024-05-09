import React from "react";

function Inputcontainer({inputVal, writeTodo, collectTodos}) {
  return (
    <div className="container">
      <input type="text" className="input-container" value={inputVal} onChange={writeTodo}/>
      <button className="button" onClick={collectTodos}>+</button>
    </div>
  );
}

export default Inputcontainer;
