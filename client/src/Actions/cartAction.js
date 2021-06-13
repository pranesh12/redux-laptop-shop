export const addToCart = (laptop, quantity) => (dispatch, getState) => {
  const cartItem = {
    _id: laptop._id,
    name: laptop.name,
    img: laptop.img,
    quantity: Number(quantity),
    shipping: Math.round(Number(laptop.shipping)),
    price: Math.round(Number(laptop.price) * quantity),
    total: Number(laptop.price) * quantity + Number(laptop.shipping),
  };

  if (cartItem.quantity > 5) {
    alert("Sorry you cannot place order more than 5");
  } else if (cartItem.quantity <= 0) {
    dispatch({ type: "REMOVE_FROM_CART", payload: laptop });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (laptop) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: laptop });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
