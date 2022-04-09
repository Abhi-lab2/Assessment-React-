import "./Counter.css";
import React, { useState } from "react";

function Counter() {
    // stateCounter is the function (dispatch fn)
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("zero limit reached");
      setNum(0);
    }
  };
  const doubleNum = () => {
    setNum(num * 2)
    console.log(num)
  }

  if(num % 2 === 0){
    document.body.style.color = "green";
  }
  else{
    document.body.style.color = "red";
  }

  return (
    <div className="Counter">
      <h1> <span>Welcome to Mini Counter App</span></h1>
      <div className="main_div">
        <div className="center">
          <h1> Counter: {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
            <button onClick={doubleNum}>Double</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
