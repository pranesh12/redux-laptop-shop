export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExsist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExsist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      const filterLaptops = state.cartItems.filter(
        (laptop) => laptop._id !== action.payload._id
      );
      return {
        ...state,
        cartItems: filterLaptops,
      };
    default:
      return state;
  }
};
