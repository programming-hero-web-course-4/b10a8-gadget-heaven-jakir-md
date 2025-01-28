import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

// eslint-disable-next-line react-refresh/only-export-components
export const CartWishContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  console.log("wish from app", wish);
  console.log("cart from app", cart);
  return (
    <CartWishContext.Provider value={{cart, setCart, wish, setWish}}>
        <div className='my-3 max-w-[1300px] mx-auto'>
          <Navbar></Navbar>
        </div>
    </CartWishContext.Provider>
  )
}

export default App
