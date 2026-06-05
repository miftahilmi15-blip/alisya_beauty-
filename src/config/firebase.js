import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <--- TAMBAHKAN INI
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_YeVJv-1a7ij3XWdhxA8g07ip1xaqISY",
  authDomain: "salon-12993.firebaseapp.com",
  databaseURL: "https://salon-12993-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salon-12993",
  storageBucket: "salon-12993.firebasestorage.app",
  messagingSenderId: "382651324725",
  appId: "1:382651324725:web:9be2540b08a2f82360d47c",
  measurementId: "G-9WKWTR9QZ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // <--- EXPORT AUTH AGAR BISA DIPAKAI DI MAIN.JS
export const analytics = getAnalytics(app);
