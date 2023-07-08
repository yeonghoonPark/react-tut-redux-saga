import { SET_PRODUCT_LIST } from "./constant";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("productReducer SET_PRODUCT_LIST", action);
      return [...action.data];

    default:
      return state;
  }
};
