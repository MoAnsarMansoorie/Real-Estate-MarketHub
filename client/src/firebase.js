// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealestate-924c5.firebaseapp.com",
  projectId: "mernrealestate-924c5",
  storageBucket: "mernrealestate-924c5.firebasestorage.app",
  messagingSenderId: "194819599328",
  appId: "1:194819599328:web:24b28a3f5826ac6ee41985"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);