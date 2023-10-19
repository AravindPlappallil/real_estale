// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cb984.firebaseapp.com",
  projectId: "real-estate-cb984",
  storageBucket: "real-estate-cb984.appspot.com",
  messagingSenderId: "361007558644",
  appId: "1:361007558644:web:16297ecfc40b4bb7be93a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);