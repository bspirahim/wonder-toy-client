import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch("https://wonder-toy-server-one.vercel.app/altoys")
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    console.log(toys);
    return (
        <div className='max-w-screen-lg mx-auto grid md:grid-cols-2 gap-10 my-12'>
        {
            toys.map(toy => console.log(toy))
        }
            <div>
                <img className='' src="" alt="" />
            </div>
            <div>
                <p>Name:</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa provident similique beatae, ducimus distinctio consequatur impedit quod cum, earum commodi fuga aut tempora libero sapiente voluptatum odit sit officia?</p>
            </div>
        </div>
    );
};

export default BlogDetails;