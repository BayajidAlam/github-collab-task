import React, { useState, useEffect } from 'react';
import Products from './Products';

const AllProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://github-react-task.vercel.app/products');
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Total Products: {data.length}</h1>
            {data.map((product) => (
                <Products key={product._id} product={product} />
            ))}
        </div>
    );
};

export default AllProducts;
