import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navItems = <>
        <Link className='mx-2 text-black bg-gray-300/70 py-2 px-3 rounded-tl-lg rounded-br-lg hover:bg-primary/90 hover:text-white transition duration-700 uppercase' to='/'>Home</Link>
        <Link className='mx-2 text-black bg-gray-300/70 py-2 px-3 rounded-tl-lg rounded-br-lg hover:bg-primary/90 hover:text-white transition duration-700 uppercase' to='alltoys'>All Toys</Link>
        {
            user ? <>
                <Link className='mx-2 text-black bg-gray-300/70 py-2 px-3 rounded-tl-lg rounded-br-lg hover:bg-primary/90 hover:text-white transition duration-700 uppercase' to='mytoys'>My Toys</Link>

                <Link className='mx-2 text-black bg-gray-300/80 py-2 px-3 rounded-tl-lg rounded-br-lg hover:bg-primary/90 hover:text-white transition duration-700 uppercase' to='addtoy'>Add A Toy</Link>
            </>
                : ''

        }

    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Logged Out')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="max-w-screen-lg mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-[50px]' src="/wonder-toy-logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">

                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>

                            <div className='flex items-center'>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img src={user?.photoURL ? user.photoURL : "/photoGallery/profile.png"} className='w-12 mr-4 rounded-full' alt="" />
                                </div>

                                <button onClick={handleSignOut} className="bg-primary/90 uppercase rounded-tl-lg rounded-br-lg text-white py-2 px-3 cursor-pointer text-lg ">Logout</button>
                            </div>

                        </>
                        :
                        <Link to='login'>
                            <button className='bg-primary/90 uppercase rounded-tl-lg rounded-br-lg text-white py-2 px-3 cursor-pointer text-lg ' >Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;