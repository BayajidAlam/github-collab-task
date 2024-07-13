import { NavLink } from "react-router-dom";
// import './index.css';
// import './../../src/index.css';



const Navber = () => {
    return (
        <div className="flex justify-evenly text-white font-semibold bg-gray-500 py-5">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/:productId'}>All Products</NavLink>
        <NavLink to={'/add-product'}>Add Product</NavLink>
        </div>
    );
};

export default Navber;