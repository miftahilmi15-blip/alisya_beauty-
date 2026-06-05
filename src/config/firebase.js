import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_YeVJv-1a7ij3XWdhxA8g07ip1xaqISY",
    authDomain: "salon-12993.firebaseapp.com",
    databaseURL: "https://salon-12993-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "salon-12993",
    storageBucket: "salon-12993.firebasestorage.app",
    messagingSenderId: "382651324725",
    appId: "1:382651324725:web:9be2540b08a2f82360d47c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
