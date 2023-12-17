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
        <div className="relative bg-center bg-cover h-[80vh] bg-fixed bg-no-repeat "
            style={{ backgroundImage: 'url("../../../../public/banner/offer-bg-2.jpg")' }}>
            <div className=' absolute w-full h-full flex items-center  bg-[rgba(0,0,0,0.20)]'>
                <div className='max-w-screen-lg mx-auto'>
                   <div className='w-1/4 ms-auto'>
                   <div  data-aos="flip-up" className=" w-96 shadow-xl border border-rose-300 rounded-tl-3xl rounded-br-3xl">
                        <div className="card-body items-center text-center">
                            <p className='text-white font-semibold text-xl'>If You are New User and It is Your First Order </p>
                            <div className="card-actions">
                                <button className="uppercase button-tab  bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer mt-4">Buy Now</button>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>

    );
};

export default Offer;