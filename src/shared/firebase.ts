// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR6sB-kXz28VKj_YkcsVCXwGJzbLowYlk",
  authDomain: "eezyhealth-2023.firebaseapp.com",
  projectId: "eezyhealth-2023",
  storageBucket: "eezyhealth-2023.appspot.com",
  messagingSenderId: "72049647211",
  appId: "1:72049647211:web:7271047f3e1bea7c031b2e",
  measurementId: "G-7YPEH921Y7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
const analytics = getAnalytics(app);
  
 