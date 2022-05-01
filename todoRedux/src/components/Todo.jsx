import React from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../actions";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.TodoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Abhi's Redux Todo</h1>
          <figure>
            <figcaption>Todo List</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" Add Items .."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {/* SetInputData("") is used to remove the data from the text-box */}
            <button
              className="add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              {" "}
              ADD TODO
            </button>
          </div>
          <div className="showItems">
            {list.map((el) => {
              return (
                <div className="items" key={el.id}>
                  <h3>{el.data}</h3>
                  <i
                    className="add-btn"
                    title="Delete item"
                    onClick={() =>
                      dispatch(deleteTodo(el.id), setInputData(""))
                    }
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
