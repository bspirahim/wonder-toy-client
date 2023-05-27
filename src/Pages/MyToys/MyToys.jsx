import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysTable from './MyToysTable';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/altoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    return (
        <div className='md:px-20'>
            <div className="relative w-full">
                <img src='/public/banner/mytoy-banner.jpg' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.4)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='text-5xl'>Your Toys - {myToys.length}</h2>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto w-full my-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                        </tr>
                    </thead>

                    {
                        myToys.map(toy => <MyToysTable
                            key={toy._id}
                            toy={toy}
                        >

                        </MyToysTable>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;