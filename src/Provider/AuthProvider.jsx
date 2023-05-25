import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, 
            (loggedInUser)=>{
                setUser(loggedInUser)
            });
            return ()=>{
                unSubscribe();
            };
    },[])


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    const updateUser = (name, photoUrl) =>{
        return updateProfile(auth, currentUser, {
            displayName:name, photoUrl:photoUrl
        });
    }


    const authInfo = {
        user,
        createUser,
        signinUser,
        signOutUser,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;