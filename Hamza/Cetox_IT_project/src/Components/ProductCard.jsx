/* eslint-disable react/prop-types */

import "../../src/index.css";
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    const { _id, productName, price, sku, shopOwner } = product
    return (
        <div className='productCardDesign bg-slate-200 space-y-2 '>
            <h2 className='text-xl'>Product Name: {productName}</h2>
            <h2 className='text-xl'>Price: {price}</h2>
            <h2 className='text-xl'>Shop Owner: {shopOwner}</h2>
            <div className='flex justify-between'>
                <p className='text-lg font-semibold '>Product Size: {sku.size}</p>
                <p className='text-lg font-semibold '>Product Color: {sku.color}</p>
            </div>
            <div className='flex justify-center w-full'>
                <Link to={_id}>
                    <button className='px-3 py-1 bg-green-700 text-white w-full ' >Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;