import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cartReducer);

  console.log(cart, "@cart");

  return (
    <header
      style={{
        padding: "0 1rem",
        backgroundColor: "orange",
        height: "100px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <span
        style={{
          backgroundColor: "green",
          borderRadius: "100%",
          lineHeight: "0",
          width: "20px",
          height: "20px",
          padding: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        {cart.length}
      </span>
      <img
        style={{ width: "60px" }}
        src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
        alt='cart'
      />
    </header>
  );
}
