import React from "react";

import { addToCart, deleteToCart, emptyToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const cart = useSelector((state) => state.cartReducer);

  console.log(cart);

  const dispatch = useDispatch();
  const product = {
    name: "IPhone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, name: `Iphone${cart.length}` }));
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
    </main>
  );
}
