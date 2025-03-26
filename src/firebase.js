// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "epsummessihub-af7ae.firebaseapp.com",
  projectId: "epsummessihub-af7ae",
  storageBucket: "epsummessihub-af7ae.firebasestorage.app",
  messagingSenderId: "385623348832",
  appId: "1:385623348832:web:650b38cc43e07ef1701505"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);