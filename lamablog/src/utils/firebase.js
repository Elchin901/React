// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-54413.firebaseapp.com",
  projectId: "blog-54413",
  storageBucket: "blog-54413.appspot.com",
  messagingSenderId: "461473095137",
  appId: "1:461473095137:web:b98e11f6de4063165dc6a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);