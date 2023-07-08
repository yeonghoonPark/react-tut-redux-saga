import { ADD_TO_CART, DELETE_TO_CART, EMPTY_CART } from "./constant";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("cartReducer type: ADD_TO_CART", action);
      return [...state, action.data];

    case DELETE_TO_CART:
      console.log("cartReducer type: DELETE_TO_CART", action);

      return [...state].filter((cV) => cV.name !== action.data);
    case EMPTY_CART:
      console.log("cartReducer type: EMPTY_CART", action);
      return [];

    default:
      return state;
  }
};
