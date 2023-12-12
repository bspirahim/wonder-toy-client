import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link,  } from 'react-router-dom';

const Blog = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch("https://wonder-toy-server-one.vercel.app/altoys")
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    console.log(toys);
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
        <div className='grid md:grid-cols-3 gap-10 p-4'>
            
            {
                    toys.map(toy =>
                        
                        <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img className='max-w-xs transition duration-300 ease-in-out hover:scale-110 w-full h-48 object-cover' src={toy.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {toy.toyName}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p><span className='font-bold'>Price:</span> {toy.price}</p>
                            <div className="card-actions justify-start">
                            <Link to={`/toy/${toy._id}`}><button className="btn btn-primary btn-sm">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                        
                        )
                }
               
        </div>
        </div>
    );
};

export default Blog;