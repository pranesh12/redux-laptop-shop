import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userLogin } from "../../Actions/userAction";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    console.log(userInfo);
    dispatch(userLogin(userInfo));
  };

  return (
    <div className="container">
      <h1 className="text-center fs-2 mb-3">User Registration</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Login
        </button>
        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/register">
              <small>Go to register</small>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
