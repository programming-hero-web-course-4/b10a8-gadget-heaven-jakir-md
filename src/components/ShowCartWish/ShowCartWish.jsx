import PropTypes from "prop-types";
import { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { CartWishContext } from "../../App";
import toast, { Toaster } from 'react-hot-toast';

const ShowCartWish = ({product, removeHandler}) => {
    const loc = useLocation();

    const {
        product_id,
        product_title,
        product_image,
        price,
        description,
      } = product;

    const {cart, setCart} = useContext(CartWishContext);
    const priceLess = (price - price * 0.2).toFixed(2);

    const onclickHandler = (productId) => {
        setCart([...cart, productId]);
        toast.success("Item Added To Cart");
    }

    return (
        <div className="p-3 shadow-xl rounded-md mb-3 bg-white">
            <div><Toaster/></div>
            <div className="flex items-center gap-5">
                <div>
                    <img src={product_image}  className ="h-25 rounded-lg w-25" alt="" />
                </div>
                <div>
                    <h1 className="font-bold">{product_title}</h1>
                    <p className="text-sm my-1 text-gray-500">{description}</p>
                    {
                        loc.pathname === '/offers' ? 
                        <div className="flex gap-3 items-center">
                            <h1 className="font-bold">Price: </h1>
                            <strike className="font-sm opacity-60">${price}</strike>
                            <h1 className="font-bold">${priceLess}</h1>
                        </div>
                        : <h1 className="font-bold">Price: ${price}</h1>
                    }
                    {
                        (loc.pathname === '/dashboard/wishlist' || loc.pathname === '/offers') && 
                        <div className="cursor-pointer font-bold my-1 rounded-full px-2 text-center py-1 w-32 hover:opacity-80  text-white bg-[#9538e2]">
                            <button className="cursor-pointer" onClick={()=>onclickHandler(product_id)}>Add To Cart </button>
                        </div>
                    }
                </div>
                {
                loc.pathname === '/dashboard/wishlist'  && 
                    <div>
                        <button onClick={()=>removeHandler(product_id)}><MdOutlineCancel className="cursor-pointer text-3xl mr-10 text-red-400" /></button>
                    </div>
                }
            </div>
        </div>
    );
};

ShowCartWish.propTypes = {
    product: PropTypes.object,
    removeHandler: PropTypes.func
}
export default ShowCartWish;