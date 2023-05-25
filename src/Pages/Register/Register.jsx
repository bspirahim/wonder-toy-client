import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import reader from "../../../public/login.json";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo)

        if ((name, email, password, photo)) {

            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser);
                    alert('Successfully added user')
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp}>
                            <div className="card-body">
                                <h1 className='text-3xl text-primary'>Please Sign Up!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                                <p className='text-center pt-4'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;