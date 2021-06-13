import React from "react";
import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div>
      <h1>Something Went Wrong</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Errorpage;
