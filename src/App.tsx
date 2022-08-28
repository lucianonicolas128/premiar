import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiP7PaZIyI0pP7bwwtVFoXtGMbxrcMaIA",
  authDomain: "premiar.firebaseapp.com",
  projectId: "premiar",
  storageBucket: "premiar.appspot.com",
  messagingSenderId: "765464998557",
  appId: "1:765464998557:web:eb16cbf67df4cd81995a74",
  measurementId: "G-B6D66XHKDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 style={{}}>Bienvenido/a! </h1>
        <p>
          La compra de tickets estará habilitada desde el Viernes 9 de Septiembre.
        </p>
        <p>Te esperamos!</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
