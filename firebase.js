// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHRC9Nijxokkj3KPWQxpHvF31xGELFcZ0",
  authDomain: "inventorymanagement-6b4eb.firebaseapp.com",
  projectId: "inventorymanagement-6b4eb",
  storageBucket: "inventorymanagement-6b4eb.appspot.com",
  messagingSenderId: "1001756721364",
  appId: "1:1001756721364:web:b893c5242c2f513d693b41",
  measurementId: "G-TMRJ8Z7XPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}