import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import { productList } from "../redux/productAction";

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart, "@cart");

  const handleLogo = () => {
    dispatch(productList());
  };

  return (
    <StyledHeader>
      <div className='left-menu'>
        <h1>
          <Link to='/' onClick={handleLogo}>
            Logo
          </Link>
        </h1>
      </div>
      <div className='right-menu'>
        <SearchForm />
        <span>{cart.length}</span>
        <Link to='/cart'>
          <CartIcon />
        </Link>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
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
    display: flex;
    align-items: center;
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
