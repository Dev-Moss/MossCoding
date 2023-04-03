// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFBHIUGL11O9bxhRHM3J1PutYqLE8Nq18",
  authDomain: "mosscoding-4b86e.firebaseapp.com",
  databaseURL: "https://mosscoding-4b86e.firebaseio.com",
  projectId: "mosscoding-4b86e",
  storageBucket: "mosscoding-4b86e.appspot.com",
  messagingSenderId: "631541374041",
  appId: "1:631541374041:web:c8eea0706fd701d0b1e548",
  measurementId: "G-MZ99537MQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('¡Hola, mundo!');
