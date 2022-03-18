import React, { lazy, Suspense, useState } from "react";
import uniqid from "uniqid";

import Cart from "./Cart";
import Product from "./Product";
const catPhoto = require("../img/cat.jpg");
const dogPhoto = require("../img/dog.jpg");
const turtlePhoto = require("../img/turtle.jpg");

function Shop() {
  const [cart, setCart] = useState([]);

  function addCartItem(e, product, price) {
    let qty = e.target.qty.value;
    e.preventDefault();
    let newArr = [];
    for (let i = 0; i < qty; i++) {
      newArr.push({ product: product, price: price, id: uniqid() });
    }

    setCart(cart.concat(newArr));
  }
  function removeCartItem(productId) {
    setCart(cart.filter((item, index) => index != productId));
  }

  function handleSubmit(e) {
    const productName = e.target.text.value;
    const productPrice = e.target.price.value;
    e.preventDefault();
    addCartItem(productName, productPrice);
  }
  return (
    <div className="Shop m-2 flex flex-col bg-slate-100">
      <Cart
        handleSubmit={handleSubmit}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
        cart={cart}
        verbose={false}
      />
      <h2 className="Shop-title text-2xl font-bold">This is the Shop</h2>

      <div className="Shop-list flex flex-row flex-wrap gap-4 py-2 rounded-sm justify-center">
        <Suspense fallback="Hey">
          <Product
            title="Turtle"
            price="15"
            img={turtlePhoto}
            addCartItem={addCartItem}
          />
          <Product
            title="Dog"
            price="300"
            addCartItem={addCartItem}
            img={dogPhoto}
          />
          <Product
            title="Cat"
            price="25"
            img={catPhoto}
            addCartItem={addCartItem}
          />
        </Suspense>
      </div>
      <a href="./">Back to app</a>
    </div>
  );
}

export default Shop;
