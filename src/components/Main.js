import React from "react";

import { addToCart, deleteToCart, emptyToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

export default function Main() {
  const products = useSelector((state) => state.productReducer);

  console.log(products, "@products");

  const dispatch = useDispatch();
  const product = {
    name: "IPhone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product.name));
  };

  const handleDeleteToCart = () => {
    dispatch(deleteToCart(`Iphone1`));
  };

  const handleEmptyToCart = () => {
    dispatch(emptyToCart());
  };

  return (
    <main>
      <div>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
      <div>
        <button onClick={handleDeleteToCart}>Delete from Cart</button>
      </div>
      <div>
        <button onClick={handleEmptyToCart}>Empty To Cart</button>
      </div>

      <div>
        <button onClick={() => dispatch(productList())}>
          Call Product List
        </button>
      </div>
    </main>
  );
}
