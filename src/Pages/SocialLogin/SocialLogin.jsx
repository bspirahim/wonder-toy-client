import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success('logged in');
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-sm  mt-3  rounded-none border-0 text-black w-3/4 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500"> <FaGoogle className='mr-3 text-center' /> Sign In with Google</button>

        </div>
    );
};

export default SocialLogin;