import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-16">
            <div className="grid md:grid-cols-2 items-center gap-10">
                <div>
                    <img src="../../../../public/banner/review.jpg" alt="" />
                </div>
                <Marquee pauseOnHover className='pt-10 shadow-none'>
                <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] m-5">
                        <div className="relative">
                            <img src="../../../../public/customer/customer-1.jpg" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                        </div>
                        <div className="card-body items-center text-center mt-6">
                            <h2 className='card-title mb-10'>Abdur Rahim</h2>
                            <div className='w-full relative'>
                                <div className='border border-[#3378B6] w-full'></div>
                                <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                    <img className=' ' src="../../../../public/icon/comma.png" alt="" />
                                </div>
                            </div>
                            <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <Rating
                                placeholderRating={5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                    </div>
                <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] m-5">
                        <div className="relative">
                            <img src="../../../../public/customer/player-1.png" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                        </div>
                        <div className="card-body items-center text-center mt-6">
                            <h2 className='card-title mb-10'>Jhon Smith</h2>
                            <div className='w-full relative'>
                                <div className='border border-[#3378B6] w-full'></div>
                                <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                    <img className=' ' src="../../../../public/icon/comma.png" alt="" />
                                </div>
                            </div>
                            <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <Rating
                                placeholderRating={5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                    </div>
                <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] m-5">
                        <div className="relative">
                            <img src="../../../../public/customer/player-3.png" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                        </div>
                        <div className="card-body items-center text-center mt-6">
                            <h2 className='card-title mb-10'>Denial Kim</h2>
                            <div className='w-full relative'>
                                <div className='border border-[#3378B6] w-full'></div>
                                <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                    <img className=' ' src="../../../../public/icon/comma.png" alt="" />
                                </div>
                            </div>
                            <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <Rating
                                placeholderRating={5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                    </div>
                <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] m-5">
                        <div className="relative">
                            <img src="../../../../public/customer/player-6.png" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                        </div>
                        <div className="card-body items-center text-center mt-6">
                            <h2 className='card-title mb-10'>Lee Philips</h2>
                            <div className='w-full relative'>
                                <div className='border border-[#3378B6] w-full'></div>
                                <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                    <img className=' ' src="../../../../public/icon/comma.png" alt="" />
                                </div>
                            </div>
                            <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                            <Rating
                                placeholderRating={5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>

    );
};

export default Testimonial;