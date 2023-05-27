import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllToys = () => {
   const [toys, allToys] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5173/alltoys')
    .then(res => res.json())
    .then(data => console.log(data))
   },[])
    return (
        <div>
            <h1>this is All Toys page</h1>
        </div>
    );
};

export default AllToys;