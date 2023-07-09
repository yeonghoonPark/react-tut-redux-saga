import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", text: "Home" },
  { path: "/cart", text: "Cart" },
];

export default function Header() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart, "@cart");

  return (
    <StyledHeader>
      <div className='left-menu'>
        <h1>
          <Link to='/'>Logo</Link>
        </h1>
        <nav>
          <ul>
            {navLinks.map(({ path, text }) => (
              <li key={path}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='right-menu'>
        <span>{cart.length}</span>
        <CartIcon />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: orange;

  a {
    text-decoration: none;
  }

  .left-menu {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      li {
        list-style: none;
      }
    }
  }

  .right-menu {
    position: relative;
    span {
      position: absolute;
      top: -6px;
      right: -6px;
      background-color: yellow;
      border: 2px solid green;
      border-radius: 100%;
      line-height: 10px;
      padding: 0.25rem;
      font-weight: bold;
    }
  }
`;
