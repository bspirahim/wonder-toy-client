import React from 'react';

const MyToysTable = ({ toy }) => {
    console.log(toy)
    const {Category, Price, ProductName, Quantity, SellerName,} = toy;
    return (


        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                           <h3>{SellerName}</h3>
                        </div>
                    </div>
                </td>
                <td>
                   <p>{ProductName}</p>
                </td>
                <td>{Category}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
            </tr>
        </tbody>
    );
};

export default MyToysTable;