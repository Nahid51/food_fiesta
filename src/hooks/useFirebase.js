import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    return {
        auth, googleProvider, facebookProvider
    };
};

export default useFirebase;