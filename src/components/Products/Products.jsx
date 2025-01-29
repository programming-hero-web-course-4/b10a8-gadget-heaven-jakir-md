import { NavLink, Outlet } from "react-router-dom";
import './products.css'
const Products = () => {

    return (
        <div>
            <div className="mt-10 pb-20 grid grid-cols-7">
                <div className="col-span-1">
                    <div id="productsid" className="p-3 bg-white flex flex-col border gap-3 border-gray-300 rounded-lg">
                        <NavLink to='/' className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">All Products</NavLink>
                        <NavLink to="/laptops" className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">Laptops</NavLink>
                        <NavLink to="/phones" className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">Phones</NavLink>
                        <NavLink to="/macbooks" className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">Macbooks</NavLink>
                        <NavLink to="/accessories" className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">Accessories</NavLink>
                        <NavLink to="/iphones" className="px-4 py-2 bg-gray-200 text-gray-700 text-center rounded-2xl">Iphones</NavLink>
                    </div>
                </div>
                <div className="ml-10 col-span-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Products;