import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

export default function CartIcon({ fontSize = "2rem" }) {
  return <StyledCartIcon fontSize={fontSize} />;
}

const StyledCartIcon = styled(AiOutlineShoppingCart)`
  font-size: ${(props) => props.fontSize};
`;
