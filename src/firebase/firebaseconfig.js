// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnJPbxnSdUq8AlzorO67OuPiPSGvlsNrU",
  authDomain: "the-indian-santa.firebaseapp.com",
  projectId: "the-indian-santa",
  storageBucket: "the-indian-santa.firebasestorage.app",
  messagingSenderId: "72678663589",
  appId: "1:72678663589:web:e7b389e34d9004775cb44c",
  measurementId: "G-METY0YCMC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);