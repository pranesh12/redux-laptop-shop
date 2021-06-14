import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllLaptopReducer } from "./Reducers/laptopReducers";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducer";
import { loginReducer, registerReducer } from "./Reducers/userReducers";

const finalReducers = combineReducers({
  getAllLaptopReducer: getAllLaptopReducer,
  cartReducer: cartReducer,
  loginReducer: loginReducer,
  registerReducer: registerReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : {};

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginReducer: {
    currentUser: currentUser,
  },
};

const composeEnhencers = composeWithDevTools({});
const store = createStore(
  finalReducers,
  initialState,
  composeEnhencers(applyMiddleware(thunk))
);

export default store;
