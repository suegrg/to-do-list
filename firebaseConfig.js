// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKYq5UvvVJekvJigHbD0UX6-2vdf70Yps",
  authDomain: "to-do-list-be23f.firebaseapp.com",
  projectId: "to-do-list-be23f",
  storageBucket: "to-do-list-be23f.firebasestorage.app",
  messagingSenderId: "126832591995",
  appId: "1:126832591995:web:4a1f0b7998f977236d4ede",
  measurementId: "G-BVCB1MTXHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default app;