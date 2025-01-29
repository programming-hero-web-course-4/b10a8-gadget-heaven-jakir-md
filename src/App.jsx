import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';


// eslint-disable-next-line react-refresh/only-export-components
export const CartWishContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [navbar, setNavbar] = useState('');

  return (
    <CartWishContext.Provider value={{cart, setCart, wish, setWish, navbar, setNavbar}}>
        <div className=' w-[96%] max-w-[1300px] mx-auto'>
          <Navbar></Navbar>
          <div className=''>
              <Outlet></Outlet>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </CartWishContext.Provider>
  )
}

export default App
