import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import './navbar.css'
import { CartWishContext } from "../../App";

const Navbar = () => {

    const {cart, wish, navbar}= useContext(CartWishContext);
    console.log(navbar);

    return (
        <div className={`${navbar === '' ? 'bg-[#9538e2] text-white' : 'bg-white text-black'} z-20 py-4 px-5 rounded-b-none`}>
            <div className="flex justify-between text-white">
                <div>
                    <h1 className={`font-bold ${navbar === '' ? 'text-white' : 'text-black'}`}>Gadget Heaven</h1>
                </div>
                <div id="navbarid" className={`flex gap-5 justify-center items-center ${navbar === '' ? 'text-white' : 'text-gray-500'}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/offers">Offers</NavLink>
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
        </div>
    );
};

export default Navbar;