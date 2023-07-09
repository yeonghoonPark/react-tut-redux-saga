import React, { useEffect } from "react";

import { addToCart, deleteToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";

export default function Main() {
  const cart = useSelector((state) => state.cartReducer);
  const products = useSelector((state) => state.productReducer);
  console.log(products, "@products");

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDeleteToCart = (productId) => {
    dispatch(deleteToCart(productId));
  };

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <main>
      <section>
        <H2>Products</H2>
        <Ul>
          <ProductCard
            products={products}
            cart={cart}
            onAddToCart={handleAddToCart}
            onDeleteToCart={handleDeleteToCart}
          />
        </Ul>
      </section>
    </main>
  );
}

const H2 = styled.h2`
  text-align: center;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
