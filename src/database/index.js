// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ--FIiKpZRTVbU0gWQymPv55hTApjofQ",
  authDomain: "todoapp-9108b.firebaseapp.com",
  projectId: "todoapp-9108b",
  storageBucket: "todoapp-9108b.appspot.com",
  messagingSenderId: "322434242167",
  appId: "1:322434242167:web:8b25a08d7fcdcc5f2d5872",
  measurementId: "G-Q11KF1XRHE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);