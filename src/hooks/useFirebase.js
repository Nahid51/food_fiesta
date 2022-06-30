import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from '../store/authentication/authSlice';

initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const user = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                incertUser(user.email, user.displayName, 'PUT');
                setError('');
                dispatch(saveUser(user));
                if (user.uid) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Logged in SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                const destination = location?.state?.from || '/';
                navigate(destination);
                localStorage.setItem('user', JSON.stringify(user))
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    };

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const user = userCredential.user;
                console.log("Registered user: ", user);
                incertUser(email, name, 'POST');
                dispatch(saveUser(user));
                localStorage.setItem('user', JSON.stringify(user))
                if (user.uid) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registered SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                /* send name to firebase after creation */
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Singed in user: ", user);
                dispatch(saveUser(user));
                if (user.uid) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Logged in SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                const destination = location?.state?.from || '/';
                navigate(destination);
                localStorage.setItem('user', JSON.stringify(user))
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const incertUser = (email, displayName, method) => {
        const user = { email, displayName, role: "user" };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        signInWithGoogle, user, isLoading, error, registerUser, loginUser
    };
};

export default useFirebase;