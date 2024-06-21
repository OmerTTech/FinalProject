import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex">
        <div className="left col-6 bg-primary">
          <h1 className="h1-font text-center">The Number <span className="text-danger">#1</span> Choice Your Hunger Solution</h1>
        </div>
        <div className="right col-6 bg-danger">
          <h1>IMG</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
