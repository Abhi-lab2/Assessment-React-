// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";
import {Todo} from "./components/Todo";

function App() {
  // const [message, setMessage] = useState("");
  // // const data = "hey console";
  // const getData = (data) => {
  //   console.log("got data from first child:", data);
  //   setMessage(data);
  // };
  // return (
  //   <div className="App">
  //     <First data={getData} />
  //     <Second message={message} />
  //   </div>
  // );
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

// function First({ dataFn }) {
//   const data = "hey c1";
//   return (
//     <div>
//       First Child
//       <button
//         onClick={() => {
//           dataFn(data);
//         }}
//       />
//     </div>
//   );
// }

// function Second({ message }) {
//   console.log("got msg", { message });
//   return <div>Second Child</div>;
// }

export default App;
