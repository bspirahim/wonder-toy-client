import React from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import CustomerReviews from './CoustomerReviews/CustomerReviews';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;