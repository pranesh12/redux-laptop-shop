import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Actions/cartAction";

const LaptopList = ({ laptop }) => {
  const dispatch = useDispatch();
  const { name, img, price } = laptop;
  let quantity = 0;

  const handleAddToCart = () => {
    dispatch(addToCart(laptop, (quantity = quantity + 1)));
  };
  return (
    <div
      className="card border-0 shadow  mb-5 bg-body rounded"
      style={{ width: "14rem" }}>
      <img src={img} className="card-img-top p-1" alt={name} />
      <div className="horizontal__line"></div>
      <div className="card-body bt">
        <p className="card-title">{name}</p>
        <p className="card-text">{price}</p>
        <button onClick={handleAddToCart} className="btn addTocartButton">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default LaptopList;
