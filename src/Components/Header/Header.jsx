import React from "react";
import "./Header.css";
import burgerBg from "../../Assets/burger-bg.png";
import Buttonfadefill from "../ButtonFade/filled/Buttonfadefill";
import Buttonfadeline from "../ButtonFade/outline/Buttonfadeline";
import { Link } from "react-router-dom";
import Iconwbg from "../Icon/Iconwbg";
import IconPizza from "../Icon/React-Icons/Pizza";

const Header = () => {
  const icons = [
    "fi fi-tr-glass-cheers",
    "fi fi-tr-hamburger",
    "fi fi-tr-pizza-slice",
    "fi fi-tr-pie",
    "fi fi-tr-turkey"
  ];
  return (
    <header className="mb-5" style={{ height: "100vh" }}>
      <div className="container p-0">
        <div className="row m-0">
          <div className="left col-7 d-flex mt-3 flex-column">
            <h1 className="header-font h1-font">
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
            <div className="buttons d-flex mt-3 mb-4 gap-4 w-100">
              <Link to="/contactus">
                <Buttonfadefill text={"Book a Table"} />
              </Link>
              <Link to="/aboutme">
                <Buttonfadeline text={"View More"} />
              </Link>
            </div>
            <div className="icons d-flex mt-4 gap-3 w-100">
              {icons?.map((iconCode) => {
                return (
                  <Link to="/menu">
                    <Iconwbg main={iconCode} size={"45px"} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="right col-7"></div>
          <div>
            <img className="burgerbg" src={burgerBg} alt="burgerbg" />
            <div className="banner">
              <div className="burger">
                <div className="crown"></div>
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
