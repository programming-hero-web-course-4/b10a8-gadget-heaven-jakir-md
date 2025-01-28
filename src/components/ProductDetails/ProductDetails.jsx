import { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { NavBarContext } from "../Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CartWishContext } from "../../App";
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
  const usePram = useParams();

  const [disable, setDisable] = useState(false);

  const allProduct = useLoaderData();
  const currProduct = allProduct.find(
    (item) => item.product_id === usePram.productId
  );

  const {
    product_id,
    product_title,
    product_image,
    price,
    Specification,
    availability,
    description,
    rating,
  } = currProduct;
  const navi = useLocation();
  const [, setHome] = useContext(NavBarContext);
  const {cart, setCart, wish, setWish} = useContext(CartWishContext);

  setHome(navi.pathname);
  
  const addToCartHandler = (newItem) => {
    setCart([...cart, newItem]);
    toast.success("Successfully added To cart");
  }

  const wishHandler = (productId) => {
    setWish([...wish, productId]);
    setDisable(true);
    toast.success("Added To WishList");
  }
  return (
    <div>
      <div><Toaster/></div>
      <div className="mt-5 py-3 bg-[#9538e2] text-center rounded-lg h-100">
        <h1 className="font-bold text-3xl text-white my-5">Product Details</h1>
        <p className="text-white mb-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="mx-auto bg-white rounded-lg w-[80%]">
          <div className="flex shadow-xl h-120">
            <figure className="p-5 w-[50%]">
              <img src={product_image} alt="Movie" className="rounded-xl h-full"/>
            </figure>
            <div className="card-body h-100 text-start pt-5">
              <div>
                <h2 className="text-2xl">{product_title}</h2>
                <h2 className="text-gray-400 text-xl my-2">Price: $ {price}</h2>
                <div className="border rounded-full w-20 text-center border-green-300 bg-green-50 text-green-800">
                    {availability ? "In Stock": "Out Stock"}
                </div>
                <p className="text-gray-500 my-1">{description}</p>
              </div>
              <div>
                <h2 className="font-bold text-xl my-1">Specifications: </h2>
                <ol className="list-decimal text-gray-500 ml-5">
                {
                    Specification.map((item, ind) => <li key={ind}>{item}</li>)
                }
                </ol>
              </div>
              <h1 className="font-bold my-1">Rating</h1>
              <div className="flex text-xl gap-1 justify-start items-center">
                <div className="text-xl flex gap-1 text-yellow-500">
                    <FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <FaRegStar/>
                <div className="ml-2 bg-gray-200 rounded-full text-gray-500 px-2 text-sm">
                    {rating}
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <div className="flex cursor-pointer hover:opacity-70 justify-center items-center gap-2 font-bold rounded-full px-3 py-2  text-white bg-[#9538e2]">
                    <button className="cursor-pointer" onClick={()=>addToCartHandler(product_id)}>Add To Cart </button>
                    <IoCartOutline className="text-2xl "/>
                </div>
                <button onClick={()=>wishHandler(product_id)} disabled={disable} className={`${disable || 'cursor-pointer'}`}>
                  <CiHeart className={`text-4xl border border-gray-400 rounded-full p-2 ${disable && 'bg-gray-300 rounded-full cursor-not-allowed'}`}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
