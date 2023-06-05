import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
    const { user } = useContext(AuthContext);

    const handleAddAToy = event => {
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

        const addToy = {
            sellerName: sellerName,
            email,
            toyName: toyName,
            category: category,
            price: price,
            quantity: quantity,
            details,
            rating,
            img
        }
        console.log(addToy);

        fetch('http://localhost:5000/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset();
                }
            })
    }



    return (
        <div className='mt-10 container mx-auto w-3/4'>
            <h1 className='text-center text-3xl my-5 font-bold'>Add A Toy</h1>
            <form onSubmit={handleAddAToy}>
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
                        <input type="text" name='toyName' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <select name='category' className="input input-bordered" required>
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
                        <input type="text" name='price' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea type="text" name='details' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;