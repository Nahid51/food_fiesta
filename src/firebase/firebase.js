import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCseULUC9tjLglLQUNuPNrtCtQJ1NAA8xM",
    authDomain: "food-fiesta-ecc8c.firebaseapp.com",
    projectId: "food-fiesta-ecc8c",
    storageBucket: "food-fiesta-ecc8c.appspot.com",
    messagingSenderId: "629915851571",
    appId: "1:629915851571:web:ab1e4cc7ee625928cb7c46"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const storage = getStorage();

export default db;
export { auth, googleProvider, storage };