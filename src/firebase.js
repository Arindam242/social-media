// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUhX6sVAjNBGynBDDrRgqOupVhvut2QOg",
    authDomain: "social-media-efb92.firebaseapp.com",
    projectId: "social-media-efb92",
    storageBucket: "social-media-efb92.appspot.com",
    messagingSenderId: "322241631800",
    appId: "1:322241631800:web:071a9a2412d686e5e738cd"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export default app;
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}



