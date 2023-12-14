import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import useTitle from '../../hooks/useTitle';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AllToys = () => {
    useTitle('All Toys')
    const toys = useLoaderData();
    console.log(toys);

    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='grid md:grid-cols-4 gap-10 p-4'>

                {
                    toys.map(toy =>

                        <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={toy.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{toy.toyName}</h2>
                                        <p>{toy?.title}</p>
                                        <p className='font-bold'>${toy.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={toy.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                    )
                }

            </div>
        </div>
    );
};

export default AllToys;