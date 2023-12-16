import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Offer = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div className="relative bg-center bg-cover h-[90vh] bg-fixed bg-no-repeat "
            style={{ backgroundImage: 'url("../../../../public/banner/offer-bg-2.jpg")' }}>
            <div dir="ltr" className=' absolute w-full h-full flex items-center  bg-[rgba(0,0,0,0.20)] border-red-50 border-2'>
                <div className='text-white md:w-2/4 mx-auto text-center md:space-y-7 me-8'>
                    <p className='text-5xl font-semibold'>If You are New User and <br /> It is Your First Order</p>
                    <button className='uppercase button-tab rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer bg-[#FFBB5A]'>Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default Offer;