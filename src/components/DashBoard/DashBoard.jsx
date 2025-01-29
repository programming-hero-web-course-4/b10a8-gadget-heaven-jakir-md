import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { CartWishContext } from "../../App";

import './dashboard.css'

const DashBoard = () => {
    const navi = useLocation();
    const {setNavbar} = useContext(CartWishContext);

    setNavbar(navi.pathname);
    return (
        <div>
            <div className=" py-3 bg-[#9538e2] text-center">
                <h1 className="font-bold text-3xl text-white my-5">Dashboard</h1>
                <p className="text-white mb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="mx-auto w-52">
                <div id="dashboardbtn" className="flex gap-5">
                    <NavLink to="/dashboard/cart" className="font-bold cursor-pointer rounded-full px-4 py-2 border border-white text-white">Cart</NavLink>
                    <NavLink to="/dashboard/wishlist" className="font-bold cursor-pointer rounded-full px-4 py-2 border text-white border-white">Wishlist</NavLink>  
                </div>
                </div>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;