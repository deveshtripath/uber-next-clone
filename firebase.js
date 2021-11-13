import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkrk82M4s-CbZIixBbP8uEikoCZ_ZYxgg",
    authDomain: "uber-clone-6f594.firebaseapp.com",
    projectId: "uber-clone-6f594",
    storageBucket: "uber-clone-6f594.appspot.com",
    messagingSenderId: "716786609735",
    appId: "1:716786609735:web:8e119b7264903b503f0b62",
    measurementId: "G-BCZT3L2ZHN"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

const auth = getAuth()

export { app, provider, auth }