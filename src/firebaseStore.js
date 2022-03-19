// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
import { hydrate } from "react-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGhRyV-En-92_S9-07rN74uQ2sy6HKkX8",
  authDomain: "shopping-cart-ebb2f.firebaseapp.com",
  projectId: "shopping-cart-ebb2f",
  storageBucket: "shopping-cart-ebb2f.appspot.com",
  messagingSenderId: "381847321884",
  appId: "1:381847321884:web:6503785c7f348178298ed9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getProducts() {
  const citiesCol = collection(db, "products");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function addProducts(productName) {
  const productsCol = collection(db, "products");
  try {
    const docRef = await addDoc(productsCol, { first: "hey" });
    console.log("DOcument written");
  } catch (e) {
    console.error("hey");
  }
}
