export const addToCart = (data) => {
  console.log("action is called", data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};
