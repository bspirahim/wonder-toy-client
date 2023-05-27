import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div className='md:px-20 mt-10'>
            <h1 className='text-4xl font-bold text-center my-10'>Shop By Category</h1>
            <Tabs className='text-center'>
                <TabList>

                    {
                        categories.map(category => 
                            <Tab>{category.category_name}</Tab>
                            )
                    }


                    {/* <Tab>Ethnic Dolls</Tab>
                    <Tab>Babby Dolls</Tab>
                    <Tab>Reborn Dolls</Tab> */}
                </TabList>

                <TabPanel>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="...">
                            <div className="card bg-base-100 shadow-xl image-full">
                                <figure><img className='w-full' src="/public/photoGallery/img-1.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="...">
                            <div className="card bg-base-100 shadow-xl image-full">
                                <figure><img className='w-full' src="/public/photoGallery/img-1.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="..."><div className="card bg-base-100 shadow-xl image-full">
                            <figure><img className='w-full' src="/public/photoGallery/img-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div></div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;