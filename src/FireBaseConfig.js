import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNxWhRsbUHbKjyoPfrUSyiY3dyf_QVlOA",
  authDomain: "ecommercewebsite-69a6c.firebaseapp.com",
  databaseURL: "https://ecommercewebsite-69a6c-default-rtdb.firebaseio.com",
  projectId: "ecommercewebsite-69a6c",
  storageBucket: "ecommercewebsite-69a6c.appspot.com",
  messagingSenderId: "606501130547",
  appId: "1:606501130547:web:0eb6ba22d893beba1dae46"
};
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);