import { useState } from "react";
import "./DropdownTesteStyled.css";

const DropdownTeste = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Selecione uma opção
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item">Opção 1</button>
          <button className="dropdown-item">Opção 2</button>
          <button className="dropdown-item">Opção 3</button>
        </div>
      )}
    </div>
  );
};

export default DropdownTeste;
