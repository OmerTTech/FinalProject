import React, { useEffect, useRef } from "react";
import "./Navmenu.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navmenu = () => {
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      navbarRef.current.classList.remove("bg-transparent", "shadow");
      navbarRef.current.classList.add("shadow");
      navbarRef.current.classList.remove("scrolled");
      document.querySelectorAll(".icon-danger").forEach((icon) => {
        icon.classList.remove("btn-light");
      });
    } else {
      navbarRef.current.classList.add("bg-transparent", "shadow");
      navbarRef.current.classList.remove("shadow");
      navbarRef.current.classList.add("scrolled");
      document.querySelectorAll(".icon-danger").forEach((icon) => {
        icon.classList.add("btn-light");
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="position-fixed" style={{ top: "0", zIndex: "100", width: "100%"}}>
      <nav
        ref={navbarRef}
        className={"navbar navbar-expand-lg p-0 bg-white bg-transparent"}
      >
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex justify-content-between w-100 pt-2 pb-0">
              <ul className="navbar-nav mt-1 ms-3 pt-0" style={{lineHeight:"2"}}>
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
                    <button className="border-0 p-1 px-2 btn btn-danger icon-danger position-relative shadow">
                      <FaRegUser className="m-1 my-2" />
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorites">
                    <button className="border-0 p-1 px-2 btn btn-danger icon-danger position-relative shadow">
                      <FaRegHeart className="m-1 my-2" />
                      <span className="navBubble">0</span>
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/favorites">
                    <button className="border-0 p-1 px-2 btn btn-danger icon-danger position-relative shadow">
                      <LuShoppingCart className="m-1 my-2" />
                      <span className="navBubble">0</span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navmenu;
