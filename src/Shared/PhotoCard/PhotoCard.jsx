import React, { useEffect, useState } from 'react';
import PhotoGallery from '../../Pages/Home/PhotoGallery';
import { Link } from 'react-router-dom';

const PhotoCard = () => {
    const [toyPhotos, setToyPhotos] = useState([])
    useEffect(() => {
        fetch('https://wonder-toy-server-one.vercel.app/altoys')
            .then(res => res.json())
            .then(data => setToyPhotos(data))
    }, [])
    console.log(toyPhotos);

    return (

        <>
        {
            JSON.stringify(toyPhotos)
        }

            <div className="grid grid-cols-4 gap-4">
                {
                    toyPhotos.map(tp => {
                        <div className="card w-auto bg-base-100 shadow-xl mb-5">
                            <figure><img src={tp.img} className='w-full h-48 object-cover' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{tp?.toyName}</h2>
                                <p>Price: {tp?.price}</p>
                                <p>Rating: {tp?.rating}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/toy/${tp?._id}`}><button className='btn btn-primary'>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>



        </>



    );
};

export default PhotoCard;