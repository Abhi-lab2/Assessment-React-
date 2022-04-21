import { useState } from "react";
import "./Inventory.css"

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 27
  });
    // Create add and remove functions here that changes the
    // state.
    const handleChange = (num, value) => {
      if (inv[num] <= 0 && value === -1) {
        return;
      }
      inv[num] = inv[num] + value;

      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens,
        inkpens : inv.inkpens
      });
  }

  
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=> handleChange("books", 1)}>+</button>
        <button className="circlularButton" onClick={()=> handleChange("books", -1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=> handleChange("notebooks", 1)}>+</button>
        <button className="circlularButton" onClick={()=> handleChange("notebooks", -1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=> handleChange("pens", 1 )}>+</button>
        <button className="circlularButton" onClick={()=> handleChange("pens", -1 )}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=> handleChange("inkpens", 1 )}>+</button>
        <button className="circlularButton" onClick={()=> handleChange("inkpens", -1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};