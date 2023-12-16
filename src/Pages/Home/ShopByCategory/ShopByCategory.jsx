import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopByCategoy.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './ShopByCategory.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const ShopByCategory = () => {

    const [category, setCategory] = useState([])

    const handleCategory = (category) => {
        fetch(`https://wonder-toy-server-one.vercel.app/altoys?category=${category}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }

    useEffect(() => {
        fetch('https://wonder-toy-server-one.vercel.app/altoys?category=teddy')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 300,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div className='max-w-screen-lg mx-auto mb-20'>
            <h2 className='text-3xl text-center mb-12 font-bold'>Shop By Category</h2>
            <div className='mb-4'>
                <span className="w-12 mx-auto h-1 bg-[#FD3358] inline-block rounded-2xl"></span>
            </div>
            <Tabs className="Tabs">
                <TabList className='w-3/4 mx-auto flex justify-around'>
                    <Tab className='uppercase button-tab  bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('teddy')}>Teddy</Tab>
                    <Tab className='uppercase button-tab bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('reborn')}>Reborn</Tab>
                    <Tab className='uppercase button-tab bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('baby')}>Baby</Tab>
                    <Tab className='uppercase button-tab bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('ethnic')}>Ethnic</Tab>
                    <Tab className='uppercase button-tab bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('barbie')}>Barbie</Tab>
                    <Tab className='uppercase button-tab bg-primary/70 rounded-tl-lg rounded-br-lg text-white py-2 px-5 cursor-pointer' onClick={() => handleCategory('haunted')}>Haunted</Tab>
                </TabList>
                <TabPanel>
                    <div data-aos="fade-right"  className='grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(ethnic =>
                            

                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={ethnic.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{ethnic.toyName}</h2>
                                        <p>{ethnic.title}</p>
                                        <p className='font-bold'>${ethnic.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={ethnic.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"  className='md:grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(reborn =>

                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={reborn.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{reborn.toyName}</h2>
                                        <p>{reborn.title}</p>
                                        <p className='font-bold'>${reborn.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={reborn.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"  className='md:grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(baby =>

                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={baby.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{baby.toyName}</h2>
                                        <p>{baby.title}</p>
                                        <p className='font-bold'>${baby.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={baby.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"  className='grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(teddy =>
                                
                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={teddy.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{teddy.toyName}</h2>
                                        <p className='p-2'>{teddy.title}</p>
                                        <p className='font-bold'>${teddy.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={teddy.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                               

                                
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"  className='grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(barbie =>
                                
                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={barbie.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{barbie.toyName}</h2>
                                        <p>{barbie.title}</p>
                                        <p className='font-bold'>${barbie.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={barbie.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                               

                                
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-left"  className='grid grid-cols-4 gap-4 my-5 p-5'>
                        {
                            category.map(haunted =>
                                
                                <div className="card w-full bg-base-100 drop-shadow-2xl shadow-inner shadow-gray-400">
                                    <figure className="shadow-inner shadow-gray-400 ">
                                        <img src={haunted.img} alt="Shoes" className="object-cover h-44 w-full" />
                                    </figure>
                                    <div className="card-body p-0 items-center text-center">
                                        <h2 className="card-title font-bold mt-4">{haunted.toyName}</h2>
                                        <p>{haunted.title}</p>
                                        <p className='font-bold'>${haunted.price}</p>
                                        <div>
                                            <Rating
                                                placeholderRating={haunted.rating}
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>
                                        </div>
                                        <div className="card-actions   w-full ">
                                            <button className="w-full p-1 bg-primary rounded-b-md mt-5 text-white hover:bg-[#185b95]">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                               

                                
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;