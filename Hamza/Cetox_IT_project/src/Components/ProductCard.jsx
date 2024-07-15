/* eslint-disable react/prop-types */

import { useState } from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, productName, price } = product;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteProductFromDB = (id) => {
        setIsModalOpen(false);
        const deleteId = id;
        const url = `https://github-react-task.vercel.app/products/${deleteId}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.status === 200) {
                    alert("Product deleted successfully")
                }
            })

    };

    return (
        <div className="p-5 rounded-lg bg-slate-100 shadow-md space-y-2">
            <h2 className="text-xl">Product Name: {productName}</h2>
            <h2 className="text-xl">Price: {price}</h2>
            <div className="flex justify-evenly items-center w-full">
                <Link to={`/products/${_id}`}>
                    <button className="px-3 rounded py-1 bg-green-700 text-white">
                        Details
                    </button>
                </Link>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 rounded py-1 bg-green-700 text-white">  Delete</button>
                <Link to={`/update/${_id}`}>
                    <button className="px-3 rounded py-1 bg-green-700 text-white ">
                        Update
                    </button>
                </Link>
            </div>
            {isModalOpen && (
                <Modal
                    onConfirm={() => deleteProductFromDB(_id)}
                    onCancel={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

const Modal = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-md">
                <h2 className="text-xl mb-4">Are you sure you want to delete this product?</h2>
                <div className="flex justify-around">
                    <button
                        onClick={onConfirm}
                        className="px-3 rounded py-1 bg-red-600 text-white"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-3 rounded py-1 bg-gray-600 text-white"
                    > Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
