import React, { useContext, useEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineLogin } from "react-icons/md";

const Header = () => {

  return (
    <header className="position-sticky" style={{ top: "0", zIndex: "100" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 py-1">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              width="60"
              height="30"
              className="d-inline-block align-text-top"
            />
            <em className="ms-2">Project</em>
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favorites">
                  <div className="d-flex align-items-center justify-content-center pt-2 pb-1">
                    <GrFavorite
                      className="position-relative"
                      style={{ bottom: "2.5px" }}
                    />
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
