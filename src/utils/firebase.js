// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB99ZUEpil1dJMhF0QhfaQVuXgN-Ldm99Y",
  authDomain: "netflix-gpt-64899.firebaseapp.com",
  projectId: "netflix-gpt-64899",
  storageBucket: "netflix-gpt-64899.appspot.com",
  messagingSenderId: "1087749432642",
  appId: "1:1087749432642:web:c0acb9b2dcc8fa17f654db",
  measurementId: "G-BKYNWKES1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();