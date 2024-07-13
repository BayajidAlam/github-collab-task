import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer/Footer";
import Allproducts from "./Products/Allproducts";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Allproducts></Allproducts>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;