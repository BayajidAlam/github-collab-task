import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayOut from "/src/MainLayOut/LayOut"
import Home from './Pages/Home.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import AddProduct from './Pages/AddProduct.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
