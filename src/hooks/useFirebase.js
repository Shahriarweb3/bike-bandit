import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/Firebase.init";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState();
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    // Register new user with email and paswword
    const registerUser = (email, password, history, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/');

            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // Login with email and Password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));;
    }

    // observe user state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }, [auth])

    // make an user admin
    useEffect(() => {
        const url = `https://fierce-garden-19030.herokuapp.com/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Sign Out an user

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://fierce-garden-19030.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }
    return {
        user,
        isLoading,
        admin,
        registerUser,
        loginUser,
        logOut,

    }
}

export default useFirebase;