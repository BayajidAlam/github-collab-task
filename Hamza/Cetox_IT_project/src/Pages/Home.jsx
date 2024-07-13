import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";


const Home = () => {
    const [products,setProducts]=useState(null)

    useEffect(() => {
     fetch('https://github-react-task.vercel.app/products')
     .then(res=>res.json())
     .then(data=>setProducts(data.data))
      }, []);

 

    return (
        <div >
            <h1 className="text-center my-5 text-5xl font-bold">Total Products:{products?.length}</h1>
            <div className="grid grid-cols-3  justify-evenly gap-5 my-5">
                {
                    products?.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;