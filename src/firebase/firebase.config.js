// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtoKWAvJU3IjRAH2ZKWzW5A4rFsX0jiUc",
  authDomain: "event-fusion-5f964.firebaseapp.com",
  projectId: "event-fusion-5f964",
  storageBucket: "event-fusion-5f964.appspot.com",
  messagingSenderId: "1027460334071",
  appId: "1:1027460334071:web:f90a247abf26b305352ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

