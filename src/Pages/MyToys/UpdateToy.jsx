import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const updateToy = useLoaderData()
    console.log(updateToy)
    const {_id, category, price, toyName, quantity, sellerName, rating, photo, details } = updateToy;

 const handleUpdateToy = event => {
        event.preventDefault()

        const form = event.target;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const img = form.photo.value;

        const updateToy = {
            sellerName: sellerName,
            email,
            toyName: toyName,
            category: category,
            price: price,
            quantity: quantity,
            details,
            img,
            rating
        }

        fetch(`http://localhost:5000/altoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated Toy',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className='mt-10 mb-20 container mx-auto w-3/4'>
                <h1 className='text-center text-3xl my-5 font-bold'>Update Toy</h1>
                <form onSubmit={handleUpdateToy}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='sellerName' className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' defaultValue={toyName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <select name='category' defaultValue={category} className="input input-bordered" required>
                                <option value=""></option>
                                <option value="ethnic">Ethnic Dolls</option>
                                <option value="reborn">Reborn Dolls</option>
                                <option value="baby">Baby Dolls</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' defaultValue={rating} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' defaultValue={photo} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea type="text" name='details' defaultValue={details} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};


export default UpdateToy;