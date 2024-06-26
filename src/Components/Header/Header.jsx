import React, { useEffect, useState } from "react";
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
    "fi fi-tr-turkey",
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="mb-5" style={{ height: "100vh" }}>
      <div className="container p-0">
        <div className="row m-0">
          <div
            className={`left ${
              isSmallScreen ? "col-12" : "col-7"
            } d-flex mt-3 flex-column`}
          >
            <h1
              className={`${
                isSmallScreen && "text-center"
              } header-font h1-font`}
              style={{ fontSize: `${isSmallScreen ? "3rem" : "3.75rem"}`, textWrap: `${isSmallScreen ? "nowrap" : "wrap"}` }}
            >
              <span>
                The Number <span className="text-danger">#1</span> Choice
              </span>
              <span>Your Hunger Solution</span>
            </h1>
            <p
              className={`${
                isSmallScreen && "text-center"
              } desc-font text-secondary mb-4`}
              style={{width:`${isSmallScreen ? "100%" : "90%"}`}}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className={`buttons d-flex ${isSmallScreen ? "justify-content-center" : null} mt-3 mb-4 gap-4 w-100`}>
              <Link to="/contactus">
                <Buttonfadefill text={"Book a Table"} />
              </Link>
              <Link to="/aboutme">
                <Buttonfadeline text={"View More"} />
              </Link>
            </div>
            <div className={`icons d-flex ${isSmallScreen ? "justify-content-center" : null} mt-4 gap-3 w-100`}>
              {icons?.map((iconCode) => {
                return (
                  <Link to="/menu">
                    <Iconwbg main={iconCode} size={"45px"} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <img className={`burgerbg ${isSmallScreen ? "d-none" : "d-block"}`} src={burgerBg} alt="burgerbg" />
            <div className={`banner ${isSmallScreen ? "d-none" : "d-block"}`}>
              <div className="burger">
                <div className="crown"></div>
                <div className="discount"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`burger-sm m-auto ${isSmallScreen ? "d-block" : "d-none"}`}></div>
      </div>
    </header>
  );
};

export default Header;
