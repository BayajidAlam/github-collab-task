import React from 'react';

const Products = ({ product }) => {
    const { productName, description, price, sku, shopName, shopImage } = product;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={shopImage} alt={shopName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>SKU: {sku.id}</p>
                <p>Shop Name: {shopName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
