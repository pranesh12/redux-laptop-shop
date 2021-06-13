import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllLaptopReducer } from "./Reducers/laptopReducers";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducer";

const finalReducers = combineReducers({
  getAllLaptopReducer: getAllLaptopReducer,
  cartReducer: cartReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

const composeEnhencers = composeWithDevTools({});
const store = createStore(
  finalReducers,
  initialState,
  composeEnhencers(applyMiddleware(thunk))
);

export default store;
