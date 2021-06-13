import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { addToCart, removeFromCart } from "../../Actions/cartAction";
import "./CartScreen.css";

const CartScreen = () => {
  const cartItemsState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartItemsState;
  console.log(cartItems);
  const grandTotal = cartItems.reduce((acc, cur) => acc + cur.total, 0);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Vat</th>
            <th scope="col">Total</th>
            <th scope="col">Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((laptop) => {
            return (
              <tr>
                <td>
                  <img
                    src={laptop.img}
                    alt={laptop.name}
                    style={{ width: "5rem" }}
                  />
                </td>
                <td>{laptop.name}</td>
                <td>
                  <small className="me-2 fs-6" style={{ color: "red" }}>
                    <AiOutlineMinus
                      className="mouseOver"
                      onClick={() =>
                        dispatch(addToCart(laptop, laptop.quantity - 1))
                      }
                    />
                  </small>
                  <small className="fs-6"> {laptop.quantity}</small>
                  <small className="ms-2 fs-6" style={{ color: "green" }}>
                    <AiOutlinePlus
                      className="mouseOver"
                      onClick={() =>
                        dispatch(addToCart(laptop, laptop.quantity + 1))
                      }
                    />
                  </small>
                </td>

                <td>{laptop.price}</td>
                <td>{laptop.shipping}</td>
                <td>{laptop.total}</td>
                <td>
                  <small className="fs-6" style={{ color: "red" }}>
                    <AiOutlineDelete
                      className="mouseOver"
                      onClick={() => dispatch(removeFromCart(laptop))}
                    />
                  </small>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="fs-5">Total</td>
            <td className="fs-5">{grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartScreen;
