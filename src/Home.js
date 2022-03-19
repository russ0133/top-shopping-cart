import { app, getProducts, addProducts } from "./firebaseStore";
import { getFirestore, collection } from "firebase/firestore";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";

import React, { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState();
  const [value, loading, error, snapshot] = useCollectionData(
    collection(getFirestore(app), "products"),
    { idField: "id" }
  );

  const [valueCol] = useCollection(collection(getFirestore(app), "products"));
  /*   useEffect(() => {
    console.log("Loaded");
    let products = getProducts();
    products.then((data) => {
      console.log(data);
      setItems(data[0].productName);
    });
  }, []); */

  return (
    <div className="App">
      <strong>CollectionData:</strong>
      {loading && <div>Loading data...</div>}
      {value &&
        value.map((data) => {
          return (
            <div key={data.id}>
              Name: {data.first}
              <br />
            </div>
          );
        })}
      <div>
        <p>
          {valueCol && (
            <span>
              <strong>Collection: </strong>
              <br />
              {valueCol.docs.map((doc) => (
                <React.Fragment key={doc.id}>
                  <strong>First:</strong> {doc.data().first} <br />
                </React.Fragment>
              ))}
            </span>
          )}
        </p>
      </div>
      This is App.js <br />
      <a href="/shop" className="bg-blue-400 px-2 rounded-lg">
        Go to Shop
      </a>
      <br />
      <button
        className="bg-red-400 px-2 rounded-lg"
        onClick={() => {
          console.log(value); /* 
          getProducts().then((data) => {
            console.log(data);
          }); */
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
