// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdqN_GA3ts5UAScpmTJcic97JFfOyRvDE",
  authDomain: "clone-2e9fc.firebaseapp.com",
  projectId: "clone-2e9fc",
  storageBucket: "clone-2e9fc.appspot.com",
  messagingSenderId: "999048953831",
  appId: "1:999048953831:web:3ed58de298825395b4c742",
  measurementId: "G-51PP4BNQ1Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
