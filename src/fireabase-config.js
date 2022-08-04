// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6ZvvHSn2czMFLS4YUkRcGw4QPMYJigdg",
    authDomain: "mentaldiary-886c2.firebaseapp.com",
    projectId: "mentaldiary-886c2",
    storageBucket: "mentaldiary-886c2.appspot.com",
    messagingSenderId: "208909819951",
    appId: "1:208909819951:web:3609c006121ad2d827a6da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);