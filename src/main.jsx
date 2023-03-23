import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp2hfgJRUfO8JOO8_-iYbDdTdQrLKOt2Q",
  authDomain: "h4-libreria-virtual.firebaseapp.com",
  projectId: "h4-libreria-virtual",
  storageBucket: "h4-libreria-virtual.appspot.com",
  messagingSenderId: "830164532316",
  appId: "1:830164532316:web:739199556671863e337a99"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
