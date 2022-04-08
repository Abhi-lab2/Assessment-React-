import "./App.css";
import Navbar from "../src/components/navbar";

function App() {
  const OS = [
    { name: "Android", style: "disc" },
    { name: "Blackberry", style: "disc" },
    { name: "iphone", style: "disc" },
    { name: "windows Phone", style: "disc" },
  ];
  const company = [
    { name: "Samsung", style: "square" },
    { name: "HTC", style: "square" },
    { name: "Micromax", style: "circle" },
    { name: "Apple", style: "disc" },
  ];

  return (
    <div className="App">
      <Navbar />
      <h2>Mobile Operating System</h2>{" "}
      <ul>
        {OS.map((e) => {
          return <li className={e.style}>{e.name}</li>;
        })}
      </ul>
      <h2>Mobile Manufactures</h2>
      <ul>
        {company.map((e) => {
          return <li className={e.style}>{e.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
