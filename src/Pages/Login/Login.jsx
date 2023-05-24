import React from 'react';
import Lottie from "lottie-react";
import reader from "../../../public/login.json";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-3xl text-primary'>Please Login!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center pt-4'>Don't have an account? <Link to='/register' className='text-primary'>Register</Link></p>

                            <button className="btn btn-primary btn-sm  mt-3  rounded-none border-0 text-black w-3/4 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500"> <FaGoogle className='mr-3 text-center'/> Sign In with Google</button>
                            
                        </div>
                    </div>
                    <div className="text-center lg:text-left w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;