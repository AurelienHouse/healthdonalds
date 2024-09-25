// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "healthdonalds.firebaseapp.com",
  projectId: "healthdonalds",
  storageBucket: "healthdonalds.appspot.com",
  messagingSenderId: "216685253657",
  appId: "1:216685253657:web:a556e5d4d58edf2a514688"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);