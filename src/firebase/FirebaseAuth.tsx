import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaM8fglAllpNXGao2TpMjxnfRXn4-B99I",
  authDomain: "socialmedia-cd84c.firebaseapp.com",
  projectId: "socialmedia-cd84c",
  storageBucket: "socialmedia-cd84c.appspot.com",
  messagingSenderId: "987039182201",
  appId: "1:987039182201:web:8d8368c78a3a89998593a8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
