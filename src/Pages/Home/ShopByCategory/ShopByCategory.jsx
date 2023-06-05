import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopByCategoy.css'
import Reborn from './Reborn/Reborn';

const ShopByCategory = () => {
    const [category, setCategory] = useState([])

    const handleCategory = (category) => {
        fetch(`http://localhost:5000/altoys?category=${category}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }
    console.log(category)


    return (
        <div className='md:px-20 my-20'>
            <Tabs className="Tabs">
                <TabList className='w-2/4 mx-auto flex justify-around'>
                    <Tab onClick={() => handleCategory('ethnic')}>Ethnic Dolls</Tab>
                    <Tab onClick={() => handleCategory('reborn')}>Reborn Dolls</Tab>
                    <Tab onClick={() => handleCategory('baby')}>Baby Dolls</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-5'>
                        {
                            category.map(ethnic =>

                                <div className="card w-auto bg-base-100 shadow-xl">
                                    <figure><img src={ethnic.img} className='w-full h-48 object-cover' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{ethnic.toyName}</h2>
                                        <p>Price: {ethnic.price}</p>
                                        <p>Rating: {ethnic.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>



                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-5'>
                        {
                            category.map(reborn =>

                                <div className="card w-auto bg-base-100 shadow-xl">
                                    <figure><img src={reborn.img} className='w-full h-48 object-cover' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{reborn.toyName}</h2>
                                        <p>Price: {reborn.price}</p>
                                        <p>Rating: {reborn.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">View Details</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-4 my-5'>
                        {
                            category.map(baby =>

                                <div className="card w-auto bg-base-100 shadow-xl">
                                    <figure><img src={baby.img} className='w-full h-48 object-cover' alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{baby.toyName}</h2>
                                        <p>Price: {baby.price}</p>
                                        <p>Rating: {baby.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">View Details</button>
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