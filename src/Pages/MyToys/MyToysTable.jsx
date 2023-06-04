import React from 'react';

const MyToysTable = ({ toy, handleDelete }) => {
    console.log(toy)
    const {_id, category, price, toyName, quantity, sellerName, } = toy;



    




    return (


        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-square bg-primary border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <h3>{sellerName}</h3>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{toyName}</p>
                </td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
            </tr>
        </tbody>
    );
};

export default MyToysTable;