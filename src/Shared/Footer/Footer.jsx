import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='md:px-20 bg-[#22386D] h-60 text-base-200 '>
            <div className='flex justify-between py-3 relative'>
                <div>
                    <small>We offer a premium service <br /> wheather you are shoping at one of our <br /> flagship stores or via our website!</small>
                    <p className='pt-2'>Kajipara Mirpur, Dhaka 1207</p>

                </div>

                <div>
                    <span><FaPhoneAlt></FaPhoneAlt>01716289767</span>
                    <FaPhoneAlt></FaPhoneAlt>01716289767
                </div>
                <div className=''>
                    <button className='btn btn-primary btn-sm absolute bottom-3 end-0'>Contact & Service</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center py-3'>
                <div className='flex'>
                    <p className='px-1 text-3xl'><FaFacebookF></FaFacebookF></p>
                    <p className='px-1 text-3xl'><FaYoutube></FaYoutube></p>
                    <p className='px-1 text-3xl'><FaTwitter /></p>
                    <p className='px-1 text-3xl'><FaInstagramSquare></FaInstagramSquare></p>
                </div>
                <div>
                    <Link className='mx-2 text-lg border-b-2' to='/'>Home</Link>
                    <Link className='mx-2 text-lg border-b-2' to='alltoys'>All Toys</Link>
                    <Link className='mx-2 text-lg border-b-2' to='mytoys'>My Toys</Link>
                    <Link className='mx-2 text-lg border-b-2' to='blog'>blog</Link>
                    <Link className='mx-2 text-lg border-b-2' to='addtoy'>Add Toy</Link>
                </div>
                <div className='bg-blue-300 p-1'>
                    <img className='h-[50px]' src="/public/wonder-toy-logo.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Footer;