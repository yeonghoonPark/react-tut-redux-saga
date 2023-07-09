import { PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.log("action productList");
  return {
    type: PRODUCT_LIST,
  };
};

export const searchProductList = (query) => {
  console.log("action searchProductList", query);
  return {
    type: SEARCH_PRODUCT_LIST,
    query,
  };
};
