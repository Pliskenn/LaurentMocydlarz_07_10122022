import React, { children, useState } from "react";
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
        {/* src={isOpen? arrow : arrowDown}  */}
          <p className="dropdown-title">{title}</p><img className="dropdown-arrow" src={isOpen? arrowUp : arrowDown} alt="Flêche"></img>
        </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
