import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PaymentCard from "../components/PaymentCard";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <main>
      <section>
        <H2>Cart</H2>

        <CardContainer>
          {cart.length > 0 ? (
            <>
              <Ul>
                <ProductCard products={cart} />
              </Ul>
              <PaymentCard cart={cart} />
            </>
          ) : (
            <strong>Cart is Empty</strong>
          )}
        </CardContainer>
      </section>
    </main>
  );
}

const H2 = styled.h2`
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 2rem;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
