// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoh1byRpxQYNX7jK68yWFcVCJr2vg1Xk",
  authDomain: "trying-firebase-a5f6b.firebaseapp.com",
  projectId: "trying-firebase-a5f6b",
  storageBucket: "trying-firebase-a5f6b.firebasestorage.app",
  messagingSenderId: "262332019805",
  appId: "1:262332019805:web:b9b00904efd07f5b0dc9b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)