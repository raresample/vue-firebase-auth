// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVUiqOmXK9yVhYUuEhqIkgh52RDlA5RfY",
  authDomain: "vue-firebase-auth-f958c.firebaseapp.com",
  projectId: "vue-firebase-auth-f958c",
  storageBucket: "vue-firebase-auth-f958c.appspot.com",
  messagingSenderId: "54357703614",
  appId: "1:54357703614:web:f62ad78f2f526a6d2017ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };