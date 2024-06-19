import React from "react";
import "./Navmenu.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { FaUser,FaHeart, FaShoppingBag } from "react-icons/fa";

const Navmenu = () => {
  return (
    <div className="position-sticky" style={{ top: "0", zIndex: "100" }}>
      <nav className={"navbar navbar-expand-lg p-1 bg-transperent"}>
        <div className="container">
          <Link className="navbar-brand m-0 p-0" to="/">
            <img
              src={Logo}
              alt="Logo"
              width="150px"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
            <ul className="navbar-nav mt-1 ms-3 pt-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  Contact Us
                </NavLink>
              </li>
              
            </ul>
            <ul className="navbar-nav mt-1 pt-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <button className="border-0 p-1 px-2 btn btn-danger position-relative">
                    <FaUser className="m-1 my-2"/>
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <button className="border-0 p-1 px-2 btn btn-danger position-relative">
                    <FaHeart className="m-1 my-2"/>
                    <span className="navBubble">0</span>
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <button className="border-0 p-1 px-2 btn btn-danger position-relative">
                    <FaShoppingBag className="m-1 my-2"/>
                    <span className="navBubble">0</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navmenu;
