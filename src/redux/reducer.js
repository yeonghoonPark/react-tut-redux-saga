import { ADD_TO_CART, DELETE_TO_CART, EMPTY_CART } from "./constant";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
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
      console.log("action is non exist");
      return state;
  }
};
