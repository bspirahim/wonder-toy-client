import React from 'react';
import { Link } from 'react-router-dom';


const AllToysTable = ({ toy }) => {
    const {_id, Category, Price, ProductName, Quantity, SellerName, img } = toy;
    return (
        <tbody>
            <tr>
                <th>
                    <label>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{SellerName}</p>
                </td>
                <td>
                    <p>{ProductName}</p>
                </td>
                <td>{Category}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td> <Link to={`/toy/${_id}`}><button className='btn btn-primary'>View Details</button></Link> </td>
            </tr>
        </tbody>
    );
};

export default AllToysTable;