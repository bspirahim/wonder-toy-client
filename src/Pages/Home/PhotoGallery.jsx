import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import PhotoCard from '../../Shared/PhotoCard/PhotoCard';

const PhotoGallery = () => {

    





    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (



        <div className='max-w-screen-lg mx-auto my-12'>
            <h1 className='w-2/4 mx-auto font-bold text-center md:text-2xl'>Welcome to our stunning gallery
                of captivating photographs</h1>
            <div className='mb-4'>
                <span className="w-12 mx-auto h-1 bg-[#FD3358] inline-block rounded-2xl"></span>
            </div>
            <div data-aos="fade-left" className="grid grid-cols-2 md:grid-cols-4 gap-4 ">



                <div className="grid gap-4">

                    <div data-aos="fade-right">
                        <div data-aos="fade-right">
                            <div className='w-full h-fit group'>
                                <div className='relative overflow-hidden'>
                                    <img class="h-auto max-w-full rounded-lg" src='https://img.freepik.com/premium-photo/knitted-stuffed-toys-amigurumi-handcrafted-crochet-hobby_637279-1401.jpg?size=626&ext=jpg&ga=GA1.1.1198683788.1701365080&semt=ais' alt="" />
                                    <div className='absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0  opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        <button className='bg-rose-900/30 text-white py-2 px-5'>Open</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>









                    <div data-aos="fade-right">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-2.jpg" alt="" />
                    </div>
                    <div data-aos="fade-right">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-4.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div data-aos="fade-down">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-5.jpg" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/still-life-crochet-plushies_23-2151091205.jpg?size=626&ext=jpg&ga=GA1.1.1198683788.1701365080&semt=ais" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-6.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div data-aos="fade-up">
                        <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/still-life-crochet-plushies_23-2151091198.jpg?size=626&ext=jpg&ga=GA1.1.1198683788.1701365080&semt=ais" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-7.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-8.jpg" alt="" />
                    </div>
                </div>



                <div className="grid gap-4">
                    <div data-aos="fade-left">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-1.jpg" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className="h-auto max-w-full rounded-lg" src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686878.jpg?size=626&ext=jpg&ga=GA1.1.1198683788.1701365080&semt=ais" alt="" />
                    </div>
                    <div data-aos="fade-left">
                        <img className="h-auto max-w-full rounded-lg" src="../../../public/photoGallery/img-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default PhotoGallery;