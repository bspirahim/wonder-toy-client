import React from 'react';
import banner1 from '../../assets/banner/banner-1.webp'
import banner2 from '../../assets/banner/banner-2.jpg'
import banner3 from '../../assets/banner/banner-3.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='text-5xl'>Sort Teddy Bear Toys <br /> For Kids</h2>
                        <p className='w-3/4 mx-auto'>Discover a delightful collection of teddy bear toys for kids on our website. Browse, choose, and sort through a wide variety of cuddly companions. Perfect for playtime and bedtime!</p>
                        <button className="btn btn-accent px-8 text-white text-lg rounded-full">Browse</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;