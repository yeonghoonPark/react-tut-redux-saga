import { ADD_TO_CART, DELETE_TO_CART, EMPTY_CART } from "./constant";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("cartReducer ADD_TO_CART", action);
      return [...state, action.data];

    case DELETE_TO_CART:
      console.log("cartReducer DELETE_TO_CART", action);
      return state.filter((cV) => cV.id !== parseInt(action.data));

    case EMPTY_CART:
      console.log("cartReducer EMPTY_CART", action);
      return [];

    default:
      return state;
  }
};
