import { combineReducers } from "redux";
import products from "./Products";
import cart from "./Cart";
import message from "./Message";

const appReducers = combineReducers({
  products: products,
  cart: cart,
  message: message
});
export default appReducers;