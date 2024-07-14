
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';


const layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
         
        </div>
    );
};

export default layout;