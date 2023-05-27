import React from 'react';

const AddAToy = () => {
    return (
        <div className='mt-10 container mx-auto w-3/4'>
            <h1 className='text-center text-3xl my-5 font-bold'>Add A Toy</h1>
            <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input  type="text" name='name' className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered" />
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
                        <input type="text" name='price' className="input input-bordered" />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' className="input input-bordered" />
                    </div> 
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea type="text" name='comment' className="input input-bordered" />
                    </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;