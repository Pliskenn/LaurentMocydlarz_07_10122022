import React from "react";
import { NavLink } from "react-router-dom";
import "../NotFound/NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="bloc-not-found">
        <div>
          <h1 className="not-found">404</h1>
        </div>
        <div>
          <p className="not-found-subtext">
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
        <div>
          <h3 className="return-home">
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
          </h3>
        </div>
      </div>
    </>
  );
};

export default NotFound;
