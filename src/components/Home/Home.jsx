import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavBarContext } from "../Navbar/Navbar";

const Home = () => {
    const [, setHome] = useContext(NavBarContext);
    setHome('');

    return (
        <div>
            <div className="h-125">
                <h1 className="text-5xl font-bold py-5 text-center text-white">Upgrade Your Tech Accessorize with</h1>
                <h1 className="text-5xl font-bold text-center text-white">Gadget Heaven Accessories</h1>
                <p className="text-white py-5 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices
                    <br /> 
                    to the coolest accessories, we have it all!
                </p>

                <div className="text-center">
                    <button className="font-bold cursor-pointer rounded-full px-4 py-2 bg-white text-[#9538e2]">Shop Now</button> 
                </div>

                <div>
                    <div className="mx-auto my-5 mb-5 w-[810px]">
                        <div className="border-2 p-4 border-gray-200 rounded-3xl ">
                            <img src="banner.jpg" className="w-[800px] mx-auto rounded-3xl h-[400px]" alt="banner" />
                        </div>
                    </div>

                    <div className="mt-10">
                        <div>
                            <h1 className="text-center text-black text-5xl font-bold">Explore Cutting Edge Gadgets</h1>
                        </div>

                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;