import { Link, NavLink, Outlet } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { createContext, useContext, useState } from "react";
import './navbar.css'
import { CartWishContext } from "../../App";

// eslint-disable-next-line react-refresh/only-export-components
export const NavBarContext = createContext();

const Navbar = () => {
    const [home, setHome] = useState('');
    const {cart, wish}= useContext(CartWishContext);

    return (
        <NavBarContext.Provider value={[home, setHome]}>
            <div className={`w-[96%] mx-auto ${home ==='' ? 'bg-[#9538e2] text-white' : ''} py-4 px-5 rounded-xl`}>
                <div className="flex justify-between text-white">
                    <div>
                        <h1 className={`font-bold ${ home !== '' ? 'text-black' : ''}`}>Gadget Heaven</h1>
                    </div>
                    <div id="navbarid" className={`flex gap-3 ${ home !== '' ? 'text-black' : ''}`}>
                        <Link to="/">Home</Link>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <Link className="absolute cursor-pointer bg-white rounded-full p-1 text-black text-2xl font-bold"><BsCart2/></Link>
                            <div className="relative bg-amber-500 rounded-full px-2 text-sm -right-4 -top-3 text-white">{cart.length}</div>
                        </div>
                        <div>
                            <Link className=" absolute cursor-pointer bg-white rounded-full p-1 text-black text-2xl font-bold"><CiHeart/></Link>
                            <div className="relative bg-amber-500 rounded-full px-2 text-sm -right-4 -top-3 text-white">{wish.length}</div>
                        </div>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </NavBarContext.Provider>
    );
};

export default Navbar;