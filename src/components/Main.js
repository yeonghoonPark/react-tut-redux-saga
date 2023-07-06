import React from "react";

import { addToCart, deleteToCart } from "../redux/action";
import { useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "IPhone",
    category: "mobile",
    price: 10000,
    color: "red",
  };

  const handleClick = () => {
    dispatch(addToCart(product));
    // dispatch(deleteToCart(product));
  };

  return (
    <main>
      <button onClick={handleClick}>Add To Cart</button>
    </main>
  );
}
