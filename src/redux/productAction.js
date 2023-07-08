import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  console.log("action productList");
  return {
    type: PRODUCT_LIST,
  };
};
