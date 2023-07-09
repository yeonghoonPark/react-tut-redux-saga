import React, { useEffect } from "react";

import { addToCart, deleteToCart, emptyToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { styled } from "styled-components";
import ProductCard from "./ProductCard";

export default function Main() {
  const products = useSelector((state) => state.productReducer);
  console.log(products, "@products");

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDeleteToCart = (productId) => {
    dispatch(deleteToCart(productId));
  };

  const handleEmptyToCart = () => {
    dispatch(emptyToCart());
  };

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <main>
      <div>
        <button onClick={handleEmptyToCart}>Empty To Cart</button>
      </div>

      <section>
        <h1>Products</h1>
        <Ul>
          <ProductCard
            products={products}
            onAddToCart={handleAddToCart}
            onDeleteToCart={handleDeleteToCart}
          />
        </Ul>
      </section>
    </main>
  );
}

const Ul = styled.ul`
  padding: 0;
`;
