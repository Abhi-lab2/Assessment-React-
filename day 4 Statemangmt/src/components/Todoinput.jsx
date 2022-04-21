import { useState } from "react";
import "./Todo.css"

export const Todoinput = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input className="inputTask"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo"
      />
      <button className="btnClick"
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};
