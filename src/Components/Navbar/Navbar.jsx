import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {

  let activeClassName = "active-link";
  
  return (
    <>
      <header>
        <div className="header_container">
          <div className="logo">
            <Link to="/">
              <img className="logo_img" src={logo} alt="logo"></img>
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/a-propos" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>
                  A propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
