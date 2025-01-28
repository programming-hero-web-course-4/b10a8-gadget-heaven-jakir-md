import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Laptops = () => {

    const laptops = useLoaderData();
    return (
        <div  className="grid grid-cols-3">
            {
                laptops.map((product, indx) => <ShowProduct key={indx} product={product}></ShowProduct>)
            }
        </div>
    );
};

export default Laptops;