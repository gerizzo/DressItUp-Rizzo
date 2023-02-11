import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVxZNaNFUCGw8WJY66z1_qWs0nlhpJlY",
  authDomain: "dress-it-up-rizzo.firebaseapp.com",
  projectId: "dress-it-up-rizzo",
  storageBucket: "dress-it-up-rizzo.appspot.com",
  messagingSenderId: "844890158033",
  appId: "1:844890158033:web:16d26cd9636263313fa6f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
