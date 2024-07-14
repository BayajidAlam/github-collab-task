import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://github-react-task.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data?.data))
    }, [id])
    console.log(product);

    return (
    <>
        <h1 className="text-5xl font-semibold text-center text-gray-800 mt-9">Product Details Page</h1>
        <div className='  flex justify-center items-center  my-9'>
            <div className="lg:w-1/2 bg-green-100  p-10 rounded-lg shadow-lg ">

                <h2 className='text-xl'>Product Name: {product?.productName}</h2>
                <h2 className='text-xl'>Price: {product?.price} </h2>
                <h2 className='text-xl'>Shop Owner: {product?.shopOwner} </h2>
                <div className='flex justify-between'>
                    <p className='text-lg font-semibold '>Product Size: {product?.sku?.size}</p>
                    <p className='text-lg font-semibold '>Product Color: {product?.sku?.color} </p>
                </div>
                <div className='flex justify-center w-full'>

                </div>
            </div>
        </div>
    </>
    );
};

export default Details;