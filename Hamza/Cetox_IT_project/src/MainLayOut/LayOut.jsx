
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default layout;