
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQumkaKbK5FN92D15SIYtRGtvr7Ig-TLQ",
  authDomain: "laundaily-3d101.firebaseapp.com",
  projectId: "laundaily-3d101",
  storageBucket: "laundaily-3d101.appspot.com",
  messagingSenderId: "271773258056",
  appId: "1:271773258056:web:df508be1de87c42a25637d",
  measurementId: "G-Q67X350QCY"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};