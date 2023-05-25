import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='md:px-20 mt-10'>
            <h1 className='text-4xl font-bold text-center my-10'>Shop By Category</h1>
            <Tabs className='text-center'>
                <TabList>
                    <Tab>Ethnic Dolls</Tab>
                    <Tab>Babby Dolls</Tab>
                    <Tab>Reborn Dolls</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
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