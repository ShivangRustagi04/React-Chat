import React from 'react';
import ChatApp from './src/ChatApp';

// Your web app's Firebase configuration

// Initialize Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFRBH7rn_b2OvKRetNXlM58C0mz4p7KJY",
  authDomain: "react-chat-90955.firebaseapp.com",
  databaseURL: "https://react-chat-90955-default-rtdb.firebaseio.com",
  projectId: "react-chat-90955",
  storageBucket: "react-chat-90955.appspot.com",
  messagingSenderId: "497984503239",
  appId: "1:497984503239:web:9684fe5f0a021492516de2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return <ChatApp />;
};

export default App;
