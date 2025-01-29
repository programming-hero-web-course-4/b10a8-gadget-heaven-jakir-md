import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CartWishContext } from "../../App";

const Home = () => {
  const navi = useLocation();
  console.log(navi);
  const { setNavbar } = useContext(CartWishContext);

  setNavbar("");

  return (
    <div className="z-10">
        <div className="h-[450px] bg-[#9538e2] rounded-b-xl">
            <h1 className="text-5xl font-bold py-5 text-center text-white">
            Upgrade Your Tech Accessorize with
            </h1>
            <h1 className="text-5xl font-bold text-center text-white">
            Gadget Heaven Accessories
            </h1>
            <p className="text-white py-5 text-center">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices
            <br />
            to the coolest accessories, we have it all!
            </p>

            <div className="text-center">
            <button className="font-bold cursor-pointer rounded-full px-4 py-2 bg-white text-[#9538e2]">
                Shop Now
            </button>
            </div>
        </div>
        <div className="mx-auto h-[300px] my-5 w-[810px]">
            <div className="border-2  relative -top-44 p-4 border-gray-200 rounded-3xl ">
                <img
                src="banner.jpg"
                className="w-[800px] mx-auto rounded-3xl h-[400px]"
                alt="banner"
                />
            </div>
        </div>
        <div>
            <div>
                <h1 className="text-center text-black text-5xl font-bold">
                Explore Cutting Edge Gadgets
                </h1>
            </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default Home;
