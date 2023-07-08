import { PRODUCT_LIST } from "./constant";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("productReducer type: PRODUCT_LIST", action);
      return [action.data];

    default:
      return state;
  }
};
