import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {
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
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/">A propos</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    </>
  );
};

export default Navbar;
