// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsbBXkbSxJQonjswehfW0NaPwn-sXSQxI",
    authDomain: "chatapp-3d438.firebaseapp.com",
    projectId: "chatapp-3d438",
    storageBucket: "chatapp-3d438.appspot.com",
    messagingSenderId: "54306580397",
    appId: "1:54306580397:web:1feb2b90a073212ea6e324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yapısının referansını react uygulamasına alma
export const auth = getAuth(app)
// google sağlayıcısının kurulumu(apple,github vs ona göre gerekli sağlayıcının kurulumu)
export const provider = new GoogleAuthProvider()