import ShowProduct from "../ShowProduct/ShowProduct";
import PropTypes from 'prop-types';

const ShowProducts = ({products}) => {
    return (
        <div className="grid grid-cols-3">
            {
                products.map((product, indx) => <ShowProduct key={indx} product={product}></ShowProduct>)
            }
        </div>
    );
};

ShowProducts.propTypes = {
    products: PropTypes.array.isRequired
}
export default ShowProducts;