import { useEffect, useState } from "react";

export const Cart = () => {
  const [apple, setApple] = useState([]);
  useEffect(() => {
    getData();
    return function cleanup() {};
  }, []);

  async function getData() {
    const data = await fetch(`http://localhost:8080/cart`).then((d) =>
      d.json()
    );
    setApple(data);
    console.log(data);
  }
  // Cart Button
  const addToCart = (d) => {
    console.log(d);
    fetch("http://localhost:8080/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(d),
    });
  };

  return (
    <div>
      {apple.map((e, i) => (
        <apple key={i}>
          <div>
            <img src={e.src} alt={e.name} />
          </div>
          <div>
            <p>{e.name}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                margin: "auto auto",
              }}
            >
              <div>{e.price}</div>
              <div>
                <span style={{ textDecoration: "line-through" }}>
                  {e.strikedoffprice}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(e);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </apple>
      ))}
    </div>
  );
};
