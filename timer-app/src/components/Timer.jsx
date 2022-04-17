import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false); //at stt pt

  useEffect(() => {
    let interval = null; // took at inintial point timmmer...

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  //   Return
  return (
    <div className="timer">
      <div className="digit">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <br />
      <br />
      <div className="buttons">
        <button onClick={() => setTimerOn(true)} className="button_slide ani s">
          Start
        </button>
        <button onClick={() => setTimerOn(false)} className="button_slide ani">
          Stop
        </button>
        <button onClick={() => setTimerOn(true)} className="button_slide ani">
          Resume
        </button>
        <button onClick={() => setTime(0)} className="button_slide ani reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
