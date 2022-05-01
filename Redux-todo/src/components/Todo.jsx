import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Todo = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch(
      addTodo({
        text: text,
        status: false,
      })
    );
  };
  const deleteTodo = () => {};
  
  console.log("add");

  
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      {todos.map((s) => (
        <div key={s.title}>{s.title}</div>
      ))}
    </div>
  );
};
