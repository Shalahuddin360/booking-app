// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUuJuSdWIFJXswszyM5F-gHxKxI2A78nM",
  authDomain: "recipe-app-def99.firebaseapp.com",
  projectId: "recipe-app-def99",
  storageBucket: "recipe-app-def99.appspot.com",
  messagingSenderId: "335922236066",
  appId: "1:335922236066:web:8f0e1aef3eb63e3afba5fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;