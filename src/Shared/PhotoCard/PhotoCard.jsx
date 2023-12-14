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

       <>
       </>



    );
};

export default PhotoCard;