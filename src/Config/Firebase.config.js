// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjeJ7r2UBh52ZAe9UooIEPao7bQMmtH4",
  authDomain: "bangladeshi-red-cross.firebaseapp.com",
  projectId: "bangladeshi-red-cross",
  storageBucket: "bangladeshi-red-cross.appspot.com",
  messagingSenderId: "79416703217",
  appId: "1:79416703217:web:361131655a1a277fb61150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);