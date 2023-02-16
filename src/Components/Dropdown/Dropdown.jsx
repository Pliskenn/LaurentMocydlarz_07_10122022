import React, { useState } from "react";
import arrowUp from "../../img/icons/arrowUp.png";
import arrowDown from "../../img/icons/arrowDown.png";
import "./Dropdown.css";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="button-content">
        <button className="dropdown" onClick={toggleDropdown}>
          <p>{title}</p><img className="dropdown-arrow" src={isOpen? arrowUp : arrowDown} alt="Flêche"></img>
        </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
