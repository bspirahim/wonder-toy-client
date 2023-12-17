import React from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import NewsLetter from './NewsLetter/NewsLetter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import Offer from './Offer/Offer';
import Faq from './Faq/Faq';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {
    useTitle('Home');

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
            <Offer></Offer>
            <Faq></Faq>
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>


            
        </div>
    );
};

export default Home;