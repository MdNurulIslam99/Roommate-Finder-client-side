// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtv_6yGZVL1qhJ5FXwjp7OyanSu8hBvTM",
  authDomain: "room-mate-finder-auth.firebaseapp.com",
  projectId: "room-mate-finder-auth",
  storageBucket: "room-mate-finder-auth.firebasestorage.app",
  messagingSenderId: "141693992297",
  appId: "1:141693992297:web:67d7b78e5a08154b2cd1f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
