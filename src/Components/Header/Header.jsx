import React from "react";
import "./Header.css";
import burgerBg from "../../Assets/burger-bg.png";

const Header = () => {
  return (
    <header className="mb-5" style={{ height: "100vh"}}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="left col-6 ">
            <h1 className="h1-font text-center">
              <span>
                The Number <span className="text-danger">#1</span> Choice
              </span>
              <span>Your Hunger Solution</span>
            </h1>
          </div>
          <div className="right col-6 d-block p-0">
            <div className="banner">
              <img className="burgerbg" src={burgerBg} alt="burgerbg" />
              <div className="burger">
                <div className="discount"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
