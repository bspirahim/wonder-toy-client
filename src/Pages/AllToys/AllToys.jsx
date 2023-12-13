import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const toys = useLoaderData();
    console.log(toys);

    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='grid md:grid-cols-3 gap-10 p-4'>

                {
                    toys.map(toy =>

                        <div className="card w-auto bg-base-100 shadow-xl">
                            <div className='relative'>
                                <figure><img className='max-w-xs transition duration-300 ease-in-out hover:scale-110 w-full h-48 object-cover rounded' src={toy?.img} alt="Shoes" /></figure>
                                <div className=' absolute bottom-1 left-2 p-3'>
                                    <p className=' text-white font-bold bg-gray-400/70 rounded p-1'>${toy.price}</p>
                                </div>
                            </div>

                            <div className="card-body p-5">
                                <p><span className='font-bold'>Name:</span> {toy?.toyName}</p>
                                <p><span className='font-bold'>Category:</span> {toy.category}</p>

                                <div className="card-actions justify-start">
                                    <Link className='w-full btn btn-primary btn-sm m-2 mx-auto' to={`/toy/${toy._id}`}>View Details</Link>
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