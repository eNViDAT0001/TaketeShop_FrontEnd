// Import the functions you need from the SDKs you need
//import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLGRA2P6MlipBJRDPQVcLIkubKg2qO_Ds",
  authDomain: "doan1-352703.firebaseapp.com",
  projectId: "doan1-352703",
  storageBucket: "doan1-352703.appspot.com",
  messagingSenderId: "944233241292",
  appId: "1:944233241292:web:b8aa4f1a76733ed2ba8069",
  measurementId: "G-E29H87WCNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);