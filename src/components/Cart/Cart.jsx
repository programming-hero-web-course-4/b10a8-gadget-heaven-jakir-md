import { useContext, useEffect, useState } from "react";
import { CartWishContext } from "../../App";
import ShowCartWish from "../ShowCartWish/ShowCartWish";
import { SlEqualizer } from "react-icons/sl";

const Cart = () => {
    const {cart, setCart} = useContext(CartWishContext);
    const [allProducts, setAllProducts] = useState([]);
    const [currCart, setCurrCart] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('/allProducts.json');
            const data = await res.json();
            setAllProducts(data);
        }
        loadData();
    }, [])

    useEffect(() => {
        let currCartItem = [];
        cart.forEach(item => {
            const curr = allProducts.filter(product => product.product_id === item);
            currCartItem = [...currCartItem, ...curr];
        });
        setCurrCart(currCartItem);
    }, [cart, allProducts]);
    

    const removeHandler = (productId) => {
        const indx = cart.indexOf(productId);
        cart.splice(indx, 1);
        setCart([...cart]);
    }

    const sortByPrice = () => {
        const sortedProducts = [...currCart].sort((a, b) => b.price - a.price);
        setCurrCart(sortedProducts);
    };

    const totalPrice = currCart.reduce((acc, curr) => acc += curr.price, 0);
    return (
        <div className="w-[70%] mx-auto my-5">
            <div className="flex justify-between mb-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <h1 className="text-xl font-bold">Total Cost: {totalPrice.toFixed(2)}</h1>
                    <button onClick={sortByPrice} className=" cursor-pointer flex items-center gap-2 text-[#9538e2] px-2 py-1 border rounded-full border-gray-300 font-bold">
                        Sort By Price
                        <SlEqualizer className="font-bold text-xl"/>
                    </button>
                    <button className="cursor-pointer bg-[#9538e2] text-white font-bold px-2 py-1 rounded-2xl">
                        Purchase
                    </button>
                </div>
            </div>
            {
                currCart.map((product, indx) => <ShowCartWish key={indx} removeHandler={removeHandler} product={product}></ShowCartWish>)
            }
        </div>
    );
};

export default Cart;