import React, { children, useState } from 'react';
import Details from '../Details/Details';

function Dropdown({title, children}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleDropdown}><h2>{title}</h2></button>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
