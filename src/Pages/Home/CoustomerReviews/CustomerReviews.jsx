import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const CustomerReviews = () => {
    return (
        <div className='md:px-20 my-10'>
            <p className='text-3xl text-center font-bold'>Customer's Review</p>
                <div className='md:grid grid-cols-4 gap-4 mt-20'>
                    <div className="card w-60 bg-indigo-100 border-double border-4 border-sky-500 text-center p-4">
                        <div className='text-center'>
                            <figure><img className='w-12' src="/public/customer/player-1.png" alt="Shoes" /></figure>
                            <p className='py-2'>Maruf Ahmed</p>
                            <div className='text-center pb-2 '>
                                <Rating
                                readonly
                                    placeholderRating={4.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-400' ></FaStar>}
                                    fullSymbol={<FaStar className='text-orange-400 cursor-auto'></FaStar>}
                                ></Rating>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur eveniet deleniti doloremque asperiores non vitae cumque totam dolor sequi.  vitae cumque totam dolor sequi.</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-indigo-100 border-double border-4 border-sky-500 text-center p-4">
                        <div className='text-center'>
                            <figure><img className='w-12' src="/public/customer/player-1.png" alt="Shoes" /></figure>
                            <p className='py-2'>Maruf Ahmed</p>
                            <div className='text-center pb-2 '>
                                <Rating
                                readonly
                                    placeholderRating={4.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-400' ></FaStar>}
                                    fullSymbol={<FaStar className='text-orange-400 cursor-auto'></FaStar>}
                                ></Rating>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur eveniet deleniti doloremque asperiores non vitae cumque totam dolor sequi.  vitae cumque totam dolor sequi.</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-indigo-100 border-double border-4 border-sky-500 text-center p-4">
                        <div className='text-center'>
                            <figure><img className='w-12' src="/public/customer/player-1.png" alt="Shoes" /></figure>
                            <p className='py-2'>Maruf Ahmed</p>
                            <div className='text-center pb-2 '>
                                <Rating
                                readonly
                                    placeholderRating={4.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-400' ></FaStar>}
                                    fullSymbol={<FaStar className='text-orange-400 cursor-auto'></FaStar>}
                                ></Rating>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur eveniet deleniti doloremque asperiores non vitae cumque totam dolor sequi.  vitae cumque totam dolor sequi.</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-indigo-100 border-double border-4 border-sky-500 text-center p-4">
                        <div className='text-center'>
                            <figure><img className='w-12' src="/public/customer/player-1.png" alt="Shoes" /></figure>
                            <p className='py-2'>Maruf Ahmed</p>
                            <div className='text-center pb-2 '>
                                <Rating
                                readonly
                                    placeholderRating={4.5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-400' ></FaStar>}
                                    fullSymbol={<FaStar className='text-orange-400 cursor-auto'></FaStar>}
                                ></Rating>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur eveniet deleniti doloremque asperiores non vitae cumque totam dolor sequi.  vitae cumque totam dolor sequi.</p>
                        </div>
                    </div>
                   
           
                   
                </div>
        </div>
    );
};

export default CustomerReviews;