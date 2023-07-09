import React, { useMemo } from "react";
import styled from "styled-components";
import { addComma } from "../util/function";

export default function PaymentCard({ cart }) {
  const basePrice = useMemo(() => {
    return cart.map(({ price }) => price).reduce((acc, cV) => acc + cV);
  }, [cart]);

  const amount = useMemo(() => {
    return cart.length;
  }, [cart]);

  const discount = useMemo(() => {
    return basePrice / 5;
  }, [basePrice]);

  const tax = useMemo(() => {
    return basePrice / 10;
  }, [basePrice]);

  const totalPrice = useMemo(() => {
    return basePrice - discount + tax;
  }, [basePrice, discount, tax]);

  const paymentList = [
    { text: "Amount", number: amount },
    { text: "Discount (5%)", number: discount },
    { text: "Tax (10%)", number: tax },
    { text: "Total", number: totalPrice },
  ];

  return (
    <Section>
      <h3>Payment</h3>
      <p>
        {paymentList.map(({ text, number }, i) => (
          <span key={i}>
            <em>{text}</em>
            <em>{addComma(number)}</em>
            <br />
          </span>
        ))}
      </p>
    </Section>
  );
}

const Section = styled.section`
  position: sticky;
  top: 10.5rem;
  min-width: 188px;
  height: 200px;
  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid #999999;
  border-radius: 5px;

  h3 {
    text-align: center;
  }

  span {
    display: flex;
    justify-content: space-between;

    em:nth-child(1) {
      flex-grow: 1;
    }
    em:nth-child(2) {
      color: orange;
    }
  }
`;
