import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDRBJHSitYRHQmv0_bkllyXxVFPemMr83Y",
  authDomain: "cart-5792e.firebaseapp.com",
  projectId: "cart-5792e",
  storageBucket: "cart-5792e.appspot.com",
  messagingSenderId: "758951000467",
  appId: "1:758951000467:web:6274edd4ef572e23275066"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
