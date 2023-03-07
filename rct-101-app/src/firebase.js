import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADG7LJy6wrhRb6pRwI-m9WBzfBFjbplGI",
  authDomain: "nykaaaa-52723.firebaseapp.com",
  projectId: "nykaaaa-52723",
  storageBucket: "nykaaaa-52723.appspot.com",
  messagingSenderId: "532019676920",
  appId: "1:532019676920:web:ebb2bac5b19ff3bb97dd0d",
  measurementId: "G-JG44T2RPBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
