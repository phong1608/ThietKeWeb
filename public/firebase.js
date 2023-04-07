// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7l6VCTEtzouX5E3lYdjyXmDzR74bCivU",
  authDomain: "clone-zanado22.firebaseapp.com",
  projectId: "clone-zanado22",
  storageBucket: "clone-zanado22.appspot.com",
  messagingSenderId: "649182548310",
  appId: "1:649182548310:web:b3b4f321b40ca8a552c6f7",
  measurementId: "G-D2P9K5T9H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);