import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const singleToy = useLoaderData();
    const { category, price, email, details, toyName, quantity, sellerName, img } = singleToy;

    console.log(singleToy)


    return (
        <div className='max-w-screen-lg mx-auto '>
            <div className="relative w-full">
                <img src='/banner/details-bg.png' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 ">
                    <div className='text-white w-2/4 mx-auto text-center  '>
                        <h2 className='md:text-5xl text-primary font-semibold'>Toy Name - {toyName}</h2>
                    </div>
                </div>
            </div>

            <div className=' md:my-12'>
                <div className="grid md:grid-cols-2 gap-10 lg:card-side bg-primary shadow-2xl drop-shadow-2xl p-4 md:p-0 text-white border-2 border-[#CAAF69]">
                    <div><img src={img}  className='w-full h-auto' alt="Album" /></div>
                    <div className="w-9/12 my-auto">
                        <p className='pb-2'><span className='font-bold'>Seller Name</span>: {sellerName} </p>
                        <p className='pb-2'><span className='font-bold'>Seller Email</span>: {email} </p>
                        <p className='pb-2'><span className='font-bold'>Category</span>: {category} </p>
                        <p className='pb-2'><span className='font-bold'>Available Quantity: </span> {quantity} </p>
                        <p className='pb-2'><span className='font-bold'>Price</span>: {price} </p>
                        <p className='pb-2'><span className='font-bold'>Details: </span>: {details} </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;