import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Allproducts = () => {
    const allProducts = useLoaderData();
    return (
        <div  className="grid grid-cols-3">
           {
                Array.isArray(allProducts) && 
                allProducts.map((product, indx) => <ShowProduct key={indx} product={product}></ShowProduct>)
           }
        </div>
    );
};

export default Allproducts;