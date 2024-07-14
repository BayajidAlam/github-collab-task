/* eslint-disable react/prop-types */

import "../../src/index.css";
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const { _id, productName, price } = product
    return (
        <div className=' p-5 rounded-lg bg-slate-100 shadow-md space-y-2 '>
            <h2 className='text-xl'>Product Name: {productName}</h2>
            <h2 className='text-xl'>Price: {price}</h2>
            <div className='flex justify-center w-full'>
                <Link to={`/products/${_id}`}>
                    <button className='px-3 rounded py-1 bg-green-700 text-white w-full ' >Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;