import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopByCategoy.css'

const ShopByCategory = () => {
    return (
        <div className='my-20'>
            <Tabs className="Tabs">
                <TabList className='w-2/4 mx-auto flex justify-around'>
                    <Tab>Ethnic Dolls</Tab>
                    <Tab>Reborn Dolls</Tab>
                    <Tab>Baby Dolls</Tab>
                </TabList>
                <TabPanel>
                    <h1>Reborn</h1>
                </TabPanel>
                <TabPanel>
                <h1>Ethnic</h1>
                </TabPanel>
                <TabPanel>
                <h1>Reborn</h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;