// import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/components/navbar";

function App() {
  // const skills = ["android", "blackberry", "iPhone", "Windows Phone"];
  return (
    <div className="App">
      <Navbar />
      <div className="item">
        <ul>
          {" "}
          <strong> Mobile Operating System</strong>
          <li>• Android</li>
          <li>• Blackberry</li>
          <li>• Iphone</li>
          <li>• Windows Phone</li>
        </ul>
        <ul>
          {" "}
          <strong> Mobile Manufacturers</strong>
          <li>•Samsung</li>
          <li>•HTC</li>
          <li>•Micromax</li>
          <li>•Apple</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
