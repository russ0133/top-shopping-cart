import { getProducts, addProducts } from "./firebaseStore";
import React, { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState();

  useEffect(() => {
    console.log("Loaded");
    let products = getProducts();
    products.then((data) => {
      console.log(data);
      setItems(data[0].productName);
    });
  }, []);

  return (
    <div className="App">
      This is App.js <br />
      <a href="/shop" className="bg-blue-400 px-2 rounded-lg">
        Go to Shop
      </a>
      <br />
      <button
        className="bg-red-400 px-2 rounded-lg"
        onClick={() => {
          getProducts().then((data) => {
            console.log(data);
          });
        }}
      >
        Log products
      </button>
      <button
        className="bg-red-400 px-2 rounded-lg"
        onClick={() => addProducts()}
      >
        Test add products
      </button>
      <br />
      Firebase Products: <br /> {items}
    </div>
  );
}

export default Home;
