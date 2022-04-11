import { Todoinput } from "./Todoinput";
import { useState } from "react";
import "./Todo.css";


function Todo() {
  const [todosList, setTodosList] = useState([]);
// "Learn React", "learn Redux"

  const getData = (todo) => {
    setTodosList([...todosList, todo]);
  };

  return (
    <div className="appData">
      <h2>To Do App</h2>
      <Todoinput getData={getData} />
      {/* Todo Lists */}
      
      {todosList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

export { Todo };
