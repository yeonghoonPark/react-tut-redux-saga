import { ADD_TO_CART, DELETE_TO_CART } from "./constant";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART");
      return [...state, action.data];

    case DELETE_TO_CART:
      console.log("DELETE_TO_CART");

      return state;

    default:
      return state;
  }
};
