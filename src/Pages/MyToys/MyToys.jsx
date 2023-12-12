import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysTable from './MyToysTable';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `https://wonder-toy-server-one.vercel.app/altoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, []);





    const handleDelete = _id => {
      console.log(_id)
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
  
            fetch(`https://wonder-toy-server-one.vercel.app/altoys/${_id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
               Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success',
              )
              const remaining = myToys.filter(toys => toys._id !== _id);
              setMyToys(remaining);
              })
          }
        })
  }

    return (
        <div className='md:px-20'>
            <div className="relative w-full">
                <img src='/banner/mytoy-banner.jpg' className="w-full" />
                <div className="absolute w-full h-full flex items-center left-0 bottom-0 bg-[rgba(0,0,0,0.4)]">
                    <div className='text-white w-2/4 mx-auto text-center space-y-7 '>
                        <h2 className='md:text-5xl'>Your Toys - {myToys.length}</h2>
                    </div>
                </div>
            </div>


            <div className="overflow-x-auto w-full md:my-12">
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
                            <th>Update Toy</th>
                        </tr>
                    </thead>

                    {
                        myToys.map(toy => <MyToysTable
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        >

                        </MyToysTable>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;