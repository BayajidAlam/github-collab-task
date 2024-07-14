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
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import Details from './Pages/Details.jsx';




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
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/:id",
        element: <Details></Details>,
    
        
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
