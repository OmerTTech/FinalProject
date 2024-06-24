import React from "react";
import "./Header.css";
import burgerBg from "../../Assets/burger-bg.png";
import Buttonfadefill from "../ButtonFade/filled/Buttonfadefill";
import Buttonfadeline from "../ButtonFade/outline/Buttonfadeline";

const Header = () => {
  return (
    <header className="mb-5" style={{ height: "100vh" }}>
      <div className="container p-0">
        <div className="row m-0">
          <div className="left col-7 d-flex flex-column align-items-center">
            <h1 className="header-font h1-font text-center">
              <span>
                The Number <span className="text-danger">#1</span> Choice
              </span>
              <span>Your Hunger Solution</span>
            </h1>
            <p className="desc-font text-secondary mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="buttons d-flex mt-3 gap-4 w-100">
              <Buttonfadefill text={"Book a Table"} />
              <Buttonfadeline text={"View More"} />
            </div>
          </div>
          <div className="right col-7"></div>
          <img className="burgerbg" src={burgerBg} alt="burgerbg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
