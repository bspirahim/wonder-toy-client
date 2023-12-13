import React, { useEffect, useState } from 'react';
import PhotoGallery from '../../Pages/Home/PhotoGallery';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const PhotoCard = ({ photoId }) => {
    // const {_id} = useParams({})
    // console.log(_id);
    // const [photoData, setPhotoData] = useState(null);

    // useEffect(() => {
    //     const fetchPhotoData = async () => {
    //         try {
    //             const response = await fetch(`https://wonder-toy-server-one.vercel.app/altoys/${_id}`);
    //             const data = await response.json();
    //             setPhotoData(data);
    //         } catch (error) {
    //             console.error('Error fetching photo data:', error);
    //         }
    //     };

    //     fetchPhotoData();
    // }, [photoId]);

    // if (!photoData) {
    //     return <div>Loading...</div>;
    // }

    return (

        <div className=' flex gap-10 max-w-screen-lg mx-10'>


            <div className="card w-1/4 bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                <figure className="">
                    <img src="../../../public/photoGallery/img-4.jpg" alt="Shoes" className="object-cover h-48 w-full" />
                </figure>
                <div className="card-body p-0 items-center text-center">
                    <h2 className="card-title font-bold mt-4">Reborn</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, a!</p>
                    <p className='font-bold'>$40.00</p>
                    <div>
                        <Rating
                            placeholderRating={5}
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

            <div className="card w-1/4 bg-base-100 shadow-xl">
                <figure className="">
                    <img src="https://img.freepik.com/premium-photo/knitted-stuffed-toys-amigurumi-handcrafted-crochet-hobby_637279-1401.jpg?size=626&ext=jpg&ga=GA1.1.1198683788.1701365080&semt=ais" alt="Shoes" className="object-cover h-48 w-full" />
                </figure>
                <div className="card-body p-0 items-center text-center">
                    <h2 className="card-title">Reborn</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="card-actions w-full ">
                        <button className="w-full hover:bg-[#185b95] p-1 bg-primary rounded-b-md mt-5">Buy Now</button>
                    </div>
                </div>
            </div>





        </div>



    );
};

export default PhotoCard;