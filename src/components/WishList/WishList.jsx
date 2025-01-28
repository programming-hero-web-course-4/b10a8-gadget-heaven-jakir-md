import { useContext, useEffect, useState } from "react";
import { CartWishContext } from "../../App";
import ShowCartWish from "../ShowCartWish/ShowCartWish";

const WishList = () => {
  const { wish, setWish } = useContext(CartWishContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/allProducts.json");
      const data = await res.json();
      setAllProducts(data);
    }
    loadData();
  }, []);

  let currWish = [];
  wish.map((item) => {
    const curr = allProducts.filter((product) => product.product_id === item);
    currWish = [...currWish, ...curr];
    return;
  });

  const removeHandler = (productId) => {
    const indx = wish.indexOf(productId);
    wish.splice(indx, 1);
    setWish([...wish]);
  };

  return (
    <div className="w-[70%] mx-auto my-5">
      <h1 className="text-3xl text-bold mb-5">WishList</h1>
        {
            currWish.map((product) => (
                <ShowCartWish  key={product.product_id} removeHandler={removeHandler} product={product}></ShowCartWish>
            ))
        }
    </div>
  );
};

export default WishList;
