import React, { children, useState } from "react";
import "./Dropdown.css";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <button className="dropdown" onClick={toggleDropdown}>
          <p>{title}</p>
        </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Dropdown;
