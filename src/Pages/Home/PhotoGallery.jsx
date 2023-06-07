import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const PhotoGallery = () => {
    useEffect(()=>{
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])
    return (
        <div data-aos="fade-up" className='md:px-20'>
            <h1 className='text-4xl font-bold text-center my-10'>Photo Gallery</h1>
            <div class="grid-cols-3 px-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-1.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-2.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-3.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-4.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-5.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-6.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-7.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-8.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
                <div class="...">
                    <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src="/public/photoGallery/img-9.jpg"
                            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                            alt="Louvre" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;