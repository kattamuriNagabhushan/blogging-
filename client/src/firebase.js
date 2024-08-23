// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-86a49.firebaseapp.com",
  projectId: "mern-blog-86a49",
  storageBucket: "mern-blog-86a49.appspot.com",
  messagingSenderId: "914075922211",
  appId: "1:914075922211:web:541caadf7c500c6b12a696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);