// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-review-website-6e682.firebaseapp.com",
  projectId: "movie-review-website-6e682",
  storageBucket: "movie-review-website-6e682.appspot.com",
  messagingSenderId: "109532457802",
  appId: "1:109532457802:web:924308d89de26931d6afb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
