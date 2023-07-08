import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  cartReducer,
  productReducer,
});
