import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowProduct = ({product}) => {

    const {product_title, price, product_image, product_id} = product;

    return (
        <div className="mb-5">
            <div className="card bg-base-100 w-76 rounded-lg pt-3 pb-2 shadow-xl">
                <figure className="px-3 pt-3">
                    <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl mt-2 h-[250px]  mx-auto" />
                </figure>
                <div className="card-body px-3  pt-3">
                    <h2 className="text-black text-xl font-bold">{product_title}</h2>
                    <p className=' text-gray-400'>Price: {price} $</p>
                    <div className="card-actions mt-3 mb-5">
                        <div className="rounded-3xl w-36 font-bold p-px py-2 bg-gradient-to-b from-[#9538e2] to-orange-500">
                            <Link to={`/products/${product_id}`} className="cursor-pointer bg-gray-50 px-[22px] py-2  text-[#9538e2] rounded-3xl">
                                Show Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowProduct.propTypes = {
    product: PropTypes.object,
}

export default ShowProduct;