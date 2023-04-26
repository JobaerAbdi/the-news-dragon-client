// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjyu39QXSlyJkGtCLk2xxeQ8H_d4lw7P4",
  authDomain: "the-news-dragon-project-9d8bd.firebaseapp.com",
  projectId: "the-news-dragon-project-9d8bd",
  storageBucket: "the-news-dragon-project-9d8bd.appspot.com",
  messagingSenderId: "951898769362",
  appId: "1:951898769362:web:aa86795e5253b46e15aa0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;