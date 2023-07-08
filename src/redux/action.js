import { ADD_TO_CART, DELETE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action addToCart", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const deleteToCart = () => {
  console.log("action deleteToCart");
  return {
    type: DELETE_TO_CART,
  };
};

export const emptyToCart = () => {
  console.log("action emptyToCart");
  return {
    type: EMPTY_CART,
  };
};
