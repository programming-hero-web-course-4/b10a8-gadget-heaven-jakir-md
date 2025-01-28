import { useLoaderData } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div className="grid grid-cols-3">
            {
                phones.map((product, indx) => <ShowProduct key={indx} product={product}></ShowProduct>)
            }
        </div>
    );
};

export default Phones;