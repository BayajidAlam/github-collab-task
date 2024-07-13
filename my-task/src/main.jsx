import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Allproducts from './Home/Products/Allproducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/allproduct',
        element:<Allproducts></Allproducts>,
       
        
      }
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
