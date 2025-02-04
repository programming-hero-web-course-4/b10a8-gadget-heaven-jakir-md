import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

import Products from './components/Products/Products.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import WishList from './components/WishList/WishList.jsx';
import Phones from './components/Phones/Phones.jsx';
import Allproducts from './components/All-products/Allproducts.jsx';
import Offers from './components/Offers/Offers.jsx';
import Accessories from './components/Accessories/Accessories.jsx';
import Iphones from './components/Iphones/Iphones.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <Products></Products>,
            children: [
              {
                path: '/',
                loader: () => fetch('/allProducts.json'),
                element: <Allproducts></Allproducts>
              },
              {
                path: '/laptops',
                loader: () => fetch('/laptops.json'),
                element: <Laptops></Laptops>
              },
              {
                path: '/phones',
                loader: () => fetch('/phones.json'),
                element: <Phones></Phones>
              },
    
              {
                path: '/macbooks',
                loader: () => fetch('/macbooks.json'),
                element: <Phones></Phones>
              },
              {
                path: '/accessories',
                element: <Accessories></Accessories>
              },
              {
                path: '/iphones',
                element: <Iphones></Iphones>
              },
            ],
          }, 
        ]
      },

      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: '/dashboard/cart',
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wishlist',
            element: <WishList></WishList>
          }
        ]
      },

      {
        path: '/offers',
        loader: () => fetch('/phones.json'),
        element: <Offers></Offers>,
      },

      {
        path: '/products/:productId',
        loader: () => fetch('/allProducts.json'),
        element: <ProductDetails></ProductDetails>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)