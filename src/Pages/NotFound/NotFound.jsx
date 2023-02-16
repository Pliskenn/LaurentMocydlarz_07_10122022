import React from "react";
import { NavLink } from "react-router-dom";
import "../NotFound/NotFound.css";

const NotFound = () => {
  return (
    <>
      <h1 className="NotFound">404</h1>
      <p className="notfound-subtext">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <h3 className="return-home">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </h3>
    </>
  );
};

export default NotFound;
