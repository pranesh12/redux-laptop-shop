import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Actions/userAction";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartState;
  const { currentUser } = userState;
  console.log(currentUser);

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Laptops-Shop
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {currentUser && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link ">{currentUser.name}</Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link to="/login" className="nav-link ">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  onClick={() => dispatch(logoutUser())}
                  className="nav-link ">
                  Log out
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FaCartPlus className="bold me-1 font-size" />
                  <small>{cartItems.length}</small>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
