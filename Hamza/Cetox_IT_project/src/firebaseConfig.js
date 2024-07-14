// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUJMtddwFGsKjZzlzei7S7CDo6Ytdcc94",
  authDomain: "cetox-task.firebaseapp.com",
  projectId: "cetox-task",
  storageBucket: "cetox-task.appspot.com",
  messagingSenderId: "444948578867",
  appId: "1:444948578867:web:adc30a37d9dceaa7f45946",
  measurementId: "G-FRGCPVQK61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = getAnalytics(app);
