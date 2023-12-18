// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './Testimonial.css'
import Rating from 'react-rating';

import { FaRegStar, FaStar } from 'react-icons/fa';
import 'swiper/css/autoplay';



const Testimonial = () => {


    return (


        <div className="max-w-screen-lg mx-auto my-16">
            <div className='flex items-center my-16'>
                <div className='flex-none'>
                    <span className="w-1 mx-auto h-12 bg-primary inline-block"></span>
                </div>
                <div className='shrink w-2/4 mx-auto'>
                    <h1 className=' font-bold text-center md:text-3xl'>Testimonials</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-10">
                <div className='max-w-full h-auto'>
                    <img className='rounded-lg' src="/banner/review.jpg" alt="" />
                </div>

                <div className='grid'>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={2}
                        spaceBetween={5}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={true}


                        className="mySwiper"
                    >

                        <SwiperSlide className='my-10'>
                            <div className="card md:w-56 w-auto bg-base-100 shadow-xl border border-[#3378B6] my-5">
                                <div className="relative">
                                    <img src="/customer/player-5.png" alt="Shoes" className="rounded-full absolute left-16 -top-12  w-24 h-24 mx-auto border border-[#3378B6]" />
                                </div>
                                <div className="card-body items-center text-center mt-6">
                                    <h2 className='card-title mb-10'>Lee Philips</h2>
                                    <div className='w-full relative'>
                                        <div className='border border-[#3378B6] w-full'></div>
                                        <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                            <img className=' ' src="/icon/comma.png" alt="" />
                                        </div>
                                    </div>
                                    <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='my-10'>
                            <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] my-5">
                                <div className="relative">
                                    <img src="/customer/player-3.png" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                                </div>
                                <div className="card-body items-center text-center mt-6">
                                    <h2 className='card-title mb-10'>Denial Kim</h2>
                                    <div className='w-full relative'>
                                        <div className='border border-[#3378B6] w-full'></div>
                                        <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                            <img className=' ' src="/icon/comma.png" alt="" />
                                        </div>
                                    </div>
                                    <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='my-10'>
                            <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] my-5">
                                <div className="relative">
                                    <img src="/customer/player-1.png" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                                </div>
                                <div className="card-body items-center text-center mt-6">
                                    <h2 className='card-title mb-10'>Jhon Smith</h2>
                                    <div className='w-full relative'>
                                        <div className='border border-[#3378B6] w-full'></div>
                                        <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                            <img className=' ' src="/icon/comma.png" alt="" />
                                        </div>
                                    </div>
                                    <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='my-10'>
                            <div className="card w-56 bg-base-100 shadow-xl border border-[#3378B6] my-5">
                                <div className="relative">
                                    <img src="../../../../public/customer/customer-1.jpg" alt="Shoes" className="rounded-full absolute left-16 -top-12 w-24 h-24 mx-auto border border-[#3378B6]" />
                                </div>
                                <div className="card-body items-center text-center mt-6">
                                    <h2 className='card-title mb-10'>Abdur Rahim</h2>
                                    <div className='w-full relative'>
                                        <div className='border border-[#3378B6] w-full'></div>
                                        <div className='absolute left-14 -top-8 w-14 h-14 p-3 bg-primary rounded-full '>
                                            <img className=' ' src="../../../../public/icon/comma.png" alt="" />
                                        </div>
                                    </div>
                                    <p className='mt-7 text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                                    <Rating
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    ></Rating>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </div>


    );
};

export default Testimonial;