import React from "react";
// import { Footer } from "./Footer";
import "./Home.css";


export const Home = (footer) => {
  return (
    <div>
      <div className="bannerImg">
        <img
          src="https://cdn.shopify.com/s/files/1/0183/5769/files/24hop-B_7c30769f-cb0d-4cd7-a871-8c431d186f96_1400x.png?v=1644373690"
          alt=""
          width="100%"
        />
        <div
          style={{ position: "relative", top: "-120px", marginLeft: "-320px" }}
        >
          <h4 style={{ fontWeight: "700" }}>Sleep - Drive - Work</h4>
          <button>VIEW PRODUCTS</button>
        </div>
      </div>
      <div className="product_img">
        <img
          src="https://images.unsplash.com/photo-1615526675651-91bdbee68170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          alt=""
          width="48%"
          height="500px"
        />
        <img
          src="https://images.unsplash.com/photo-1573285750682-05689540dfbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
          alt=""
          width="48%"
          height="500px"
        />
      </div>
      <p>Click the dots to learn more</p>
      <h5>Shop our instagram looks</h5>
      {/* <Footer/> */}

    </div>
  );
};
