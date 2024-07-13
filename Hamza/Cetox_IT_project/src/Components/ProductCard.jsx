import React from 'react';
import "../../src/index.css";
const ProductCard = ({product}) => {
  const {productName,price,sku,shopOwner}=product
    return (
        <div className='productCardDesign'>
            <h2>Product Name: {productName}</h2>
        </div>
    );
};

export default ProductCard;