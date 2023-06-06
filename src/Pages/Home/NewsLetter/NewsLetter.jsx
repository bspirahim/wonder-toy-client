import React from 'react';

const NewsLetter = () => {
    return (
        <div className='md:px-20 my-20'>
            <div className=" relative w-full">
                <img src='/public/banner/bg-3.jpg' className="w-full rounded-lg" />
                <div className="absolute rounded-xl  h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#22386D] to-rgba(21, 21, 21, 0)">
                    <div className='text-base-700  space-y-4  pl-12'>
                        <h2 className='text-4xl'>Subscribe Newsletter</h2>
                        <p>Get the latest Toy trend on your inbox!</p>
                        <div className="form-control ">
                            <label className="input-group">
                                <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                                <button className='btn border-0 bg-primary'>Subscribe</button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;