import React from 'react';
import Aos from 'aos';
import './Newslatter.css'

const NewsLetter = () => {
    return (
        <div className="gradient-animation py-12">
            <div className='max-w-screen-lg mx-auto'>
            <div className='w-3/4 mx-auto text-center text-white  md:space-y-4 py-10 gradient-animation drop-shadow-2xl shadow-5xl p-2'>
                        <h2 className='md:text-2xl'>Subscribe Newsletter</h2>
                        <p className='py-1 text-xl'>Get the latest Toy trend on your inbox!</p>
                        <div className="form-control w-3/4 mx-auto">
                            <label className="input-group">
                                <input type="text" placeholder="info@site.com" className="input input-bordered w-full text-black" />
                                <button className='btn border-0 bg-[#22386D]'>Subscribe</button>
                            </label>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NewsLetter;