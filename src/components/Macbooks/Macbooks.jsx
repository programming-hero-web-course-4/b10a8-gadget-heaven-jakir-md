import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Macbooks = () => {
    const macbooks = useLoaderData();
    return (
        <div  className="grid grid-cols-3">
            {
                Array.isArray(macbooks) && 
                macbooks.map((product, indx) => <ShowProduct key={indx} product={product}></ShowProduct>)
           }
        </div>
    );
};

export default Macbooks;