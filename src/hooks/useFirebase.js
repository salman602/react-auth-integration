import firebaseInitializer from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitializer()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, []);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingFacebook,
        logOut
    }
};

export default useFirebase;