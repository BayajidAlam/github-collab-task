import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const [product,setProduct]=useState(null)
    const {id}= useParams()
    useEffect(()=>{
        fetch(`https://github-react-task.vercel.app/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data?.data))
    },[id])
    console.log(product);
 
    return (
        <div>
            product details
        </div>
    );
};

export default Details;