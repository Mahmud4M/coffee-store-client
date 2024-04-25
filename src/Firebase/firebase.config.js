// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClWC0hIeDV-HFRbTrbvbfH_2xmYCB5eEk",
  authDomain: "coffee-store-manage.firebaseapp.com",
  projectId: "coffee-store-manage",
  storageBucket: "coffee-store-manage.appspot.com",
  messagingSenderId: "1020843134482",
  appId: "1:1020843134482:web:c83b866a621e5f269492cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;