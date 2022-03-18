import React, { useState } from "react";
import uniqid from "uniqid";

function Cart({ handleSubmit, addCartItem, removeCartItem, cart, verbose }) {
  const [show, setShow] = useState(verbose);
  return (
    <div className="Cart bg-indigo-400 text-center text-lg font-bold p-0 -m-2 mb-2 w-screen">
      {cart.length == 0 && <p>You have no items in your cart.</p>}
      {cart.length > 0 && (
        <p>
          You have {cart.length} items in your cart. <br />
          <button onClick={() => setShow(!show)}>Show items</button>
        </p>
      )}

      {show &&
        cart.map((item, index) => {
          return (
            <div key={uniqid()}>
              Produto {index}: {item.product} <br />
              Preço: {item.price} <br />
              <button
                className="bg-red-600 px-1 rounded-md shadow-sm text-sm text-neutral-200"
                onClick={() => removeCartItem(index)}
              >
                Remove from Cart
              </button>{" "}
              <br />
              ------
            </div>
          );
        })}
      <br />
    </div>
  );
}

export default Cart;
