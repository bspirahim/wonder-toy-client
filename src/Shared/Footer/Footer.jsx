import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter, FaYoutube, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-[#22386D] md:h-72 text-base-200'>
            <div className='grid md:grid-cols-3 gap-10 justify-center md:text-start py-8 relative max-w-screen-lg mx-auto'>
                <div>
                    <small>We offer a premium service <br /> wheather you are shoping at one of our <br /> flagship stores or via our website!</small>
                    <p className='pt-2'>Kajipara Mirpur, Dhaka 1207</p>

                </div>

                <div className=''>
                    <span className='flex items-center'><FaPhoneAlt className='me-2'></FaPhoneAlt>01716289767</span>

                    <span className='flex items-center'><FaPhoneAlt className='me-2'></FaPhoneAlt>telephone- 091500000</span>

                    <span className='flex items-center'><FaMailBulk className='me-2'></FaMailBulk>bspirahim@gmail.com</span>
                    <span className='flex items-center'><FaMailBulk className='me-2'></FaMailBulk>bspirahim@gmail.com</span>
                    
                </div>
                <div className='md:my-0 my-4'>
                    <button className='btn btn-primary btn-sm absolute bottom-10 md:end-0'>Contact & Service</button>
                </div>
            </div>

            <hr className='border-1 border-indigo-200'/>


            <div className='grid md:grid-cols-3 justify-items-center md:justify-items-start md:relative py-10 max-w-screen-lg mx-auto'>
                <div className='flex'>
                    <p className='px-1 text-3xl hover:text-primary cursor-pointer'><FaFacebookF></FaFacebookF></p>
                    <p className='px-1 text-3xl hover:text-primary cursor-pointer'><FaYoutube></FaYoutube></p>
                    <p className='px-1 text-3xl hover:text-primary cursor-pointer'><FaTwitter /></p>
                    <p className='px-1 text-3xl hover:text-primary cursor-pointer'><FaInstagramSquare></FaInstagramSquare></p>
                </div>
                <div className='py-4 md:py-0'>
                    <Link className='mx-2 text-lg border-b-2 border-primary hover:text-primary' to='/'>Home</Link>
                    <Link className='mx-2 text-lg border-b-2 border-primary hover:text-primary' to='alltoys'>AllToys</Link>
                    <Link className='mx-2 text-lg border-b-2 border-primary hover:text-primary' to='mytoys'>MyToys</Link>
                    <Link className='mx-2 text-lg border-b-2 border-primary hover:text-primary' to='blog'>blog</Link>
                    <Link className='mx-2 text-lg border-b-2 border-primary hover:text-primary' to='addtoy'>AddToy</Link>
                </div>
                <div className=' p-1 rounded-lg  md:absolute md:right-0 md:top-6'>
                    <img className='h-[50px] end-0' src="/wonder-toy-logo.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Footer;