import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCseULUC9tjLglLQUNuPNrtCtQJ1NAA8xM",
    authDomain: "food-fiesta-ecc8c.firebaseapp.com",
    projectId: "food-fiesta-ecc8c",
    storageBucket: "food-fiesta-ecc8c.appspot.com",
    messagingSenderId: "629915851571",
    appId: "1:629915851571:web:ab1e4cc7ee625928cb7c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export default app;