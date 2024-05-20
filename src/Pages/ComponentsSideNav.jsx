import { useState } from "react";
import "./componentssidenav.css";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen); 
  };


  return (
    <>
      <div
        onClick={toggleNavigation}
        className={`burger ${isOpen ? "active" : ""}`}
      >
        <span className={`bar1 ${isOpen ? "active" : ""}`}></span>
        <span className={`bar2 ${isOpen ? "active" : ""}`}></span>
        <span className={`bar3 ${isOpen ? "active" : ""}`}></span>
      </div>{" "}
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <h3 className="navigation-heading">
          <a href="/">Home</a>
        </h3>
                <h3 className="navigation-heading">
          <a href="/about">About</a>
        </h3>
        
        <h3 className="navigation-heading">
          <a href="/projects">Projects</a>
        </h3>
                <h3 className="navigation-heading">
          <a href="/layouts">Layouts</a>
        </h3>
        <h3 className="navigation-heading">
          <a href="/components">Components</a>
        </h3>
        <ul className="navigation-list">
          <li>
            <a href="/components/accordions">Accordions</a>
          </li>
          <li>
            <a href="/components/buttons">Buttons</a>
          </li>
          <li>
            <a href="/components/cards">Cards</a>
          </li>
          <li>
            <a href="/components/cursor">Cursor</a>
          </li>
          <li>
            <a href="/components/dropdowns">Dropdown</a>
          </li>
          <li>
            <a href="/components/forms">Forms</a>
          </li>
          <li>
            <a href="/components/navbars">Navbar</a>
          </li>
          <li>
            <a href="/components/switches">Switches</a>
          </li>
        </ul>
        <h3 className="navigation-heading">
          <a href="/animations">Animations</a>
        </h3>
          <ul className="navigation-list">
            <li>
              <a href="#loading">Loading spinner</a>
            </li>
            <li>
              <a href="#loading">Others</a>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default SideNav;
