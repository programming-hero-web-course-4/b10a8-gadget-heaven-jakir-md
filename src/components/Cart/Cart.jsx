import { useContext, useEffect, useState } from "react";
import { CartWishContext } from "../../App";
import ShowCartWish from "../ShowCartWish/ShowCartWish";
import { SlEqualizer } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {cart, setCart} = useContext(CartWishContext);
    const [allProducts, setAllProducts] = useState([]);
    const [currCart, setCurrCart] = useState([]);
    const [close, setClose] = useState(false);

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

    let totalPrice = currCart.reduce((acc, curr) => acc += curr.price, 0);

    const purchaseHandler = () => {
        if(totalPrice > 0.0){
         document.getElementById('my_modal_5').showModal();
        }
        setClose(!close);
    }

    const removeCart = () => {
        setCart([]);
        navFunc();
    }

    const navi = useNavigate();

    const navFunc = () => {
        navi('/');
    }

    return (
        <div className="w-[70%] mx-auto py-5 my-5">
            <div className="flex justify-between mb-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <h1 className="text-xl font-bold">Total Cost: {totalPrice}</h1>
                    <button onClick={sortByPrice} disabled={close} className={` ${(close || totalPrice <= 0.0) ? 'cursor-not-allowed bg-gray-200 text-gray-500': 'cursor-pointer'} flex items-center gap-2 text-[#9538e2] px-2 py-1 border rounded-full border-gray-300 font-bold`}>
                        Sort By Price
                        <SlEqualizer className="font-bold text-xl"/>
                    </button>
                    <button onClick={purchaseHandler} disabled={close} className={` ${(close || totalPrice <= 0.0) ? 'cursor-not-allowed bg-gray-200 text-gray-500': 'cursor-pointer text-white'} bg-[#9538e2]  font-bold px-3 py-2 rounded-2xl`}>
                        Purchase
                    </button>
                </div>
            </div>
            
            <dialog id="my_modal_5" className="modal modal-bottom mx-auto p-10 px-5 pb-5 rounded-lg mt-36 sm:modal-middle">
                <div className="modal-box text-center">
                    <img src="/Group.png" className="mx-auto mb-2" alt="" />
                    <h3 className="font-bold text-3xl">Payment Successfull</h3>
                    <div className="h-[1px] mt-3 bg-gray-300 w-[80%] mx-auto">

                    </div>
                    <div className="text-sm text-gray-500 py-5">
                        <p>Thanks For Purchasing.</p>
                        <p>Total: {totalPrice}</p>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={removeCart} className="w-full cursor-pointer hover:bg-gray-300 bg-gray-200 rounded-full px-3 py-2">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            {
                currCart.map((product, indx) => <ShowCartWish key={indx} removeHandler={removeHandler} product={product}></ShowCartWish>)
            }
        </div>
    );
};

export default Cart;