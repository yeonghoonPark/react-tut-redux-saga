import { ADD_TO_CART, DELETE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const deleteToCart = (data) => {
  console.log("action is called", data);
  return {
    type: DELETE_TO_CART,
    data,
  };
};
