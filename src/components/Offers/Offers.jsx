import {  useLoaderData, useLocation } from "react-router-dom";
import { CartWishContext } from "../../App";
import { useContext } from "react";
import ShowCartWish from "../ShowCartWish/ShowCartWish";
import { Helmet } from 'react-helmet';

const Offers = () => {
    const navi = useLocation();
    const {setNavbar} = useContext(CartWishContext);

    const data = useLoaderData();
    setNavbar(navi.pathname);
    return (
        
        <div className="">
            <Helmet>
                <title>Offers</title>
            </Helmet>
            <div className="mx-auto my-5 py-5 bg-[#9538e2] text-center">
                <h1 className="font-bold text-3xl text-white my-5">Ongoing Offers</h1>
                <p className="text-white mb-5">20% Flat Discount On Phones</p>
            </div>
            <div className="w-[70%] mx-auto">
                {
                    data.map((product, indx) => <ShowCartWish key={indx} product={product}></ShowCartWish>)
                }
            </div>
        </div>
    );
};

export default Offers;