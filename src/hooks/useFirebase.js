import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false))
    }
    return {
        signInWithGoogle
    };
};

export default useFirebase;