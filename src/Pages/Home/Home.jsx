import React from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import CustomerReviews from './CoustomerReviews/CustomerReviews';
import NewsLetter from './NewsLetter/NewsLetter';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';



const Home = () => {

    useEffect(()=>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory data-aos="fade-up"></ShopByCategory>
            <CustomerReviews data-aos="fade-up"></CustomerReviews>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;