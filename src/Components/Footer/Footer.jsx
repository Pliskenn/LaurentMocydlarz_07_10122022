import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo_footer from "../../img/footer_logo.png";

const Footer = () => {
    return (
      <>
          <footer>
            <div className="footer_container">
              <div className="logo_footer">
                  <Link to="/">
                      <img src={logo_footer} alt="logo"></img>
                  </Link>
              </div>
              <p className="footer_text">© 2020 Kasa. All rights reserved.</p>
            </div>
          </footer>
      </>
    );
  };
  
  export default Footer;
