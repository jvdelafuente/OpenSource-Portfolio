import { useState, useEffect } from "react";
import "./componentssidenav.css";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");


  useEffect(() => {
    const pathname = window.location.pathname;
    const sections = pathname.split("/"); 
    setCurrentSection(sections[1] || "");
  }, []);



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
        <h3 className={`navigation-heading ${currentSection === "" ? "active" : ""}`}>
          <a href="/">Home</a>
        </h3>
                <h3 className={`navigation-heading ${currentSection === "about" ? "active" : ""}`}>
          <a href="/about">About</a>
        </h3>
        
        <h3 className={`navigation-heading ${currentSection === "projects" ? "active" : ""}`}>
          <a href="/projects">Projects</a>
        </h3>
                <h3 className={`navigation-heading ${currentSection === "layouts" ? "active" : ""}`}>
          <a href="/layouts">Layouts</a>
        </h3>
        <h3 className={`navigation-heading ${currentSection === "components" ? "active" : ""}`}>
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
        <h3 className={`navigation-heading ${currentSection === "animations" ? "active" : ""}`}>
          <a href="/animations">Animations</a>
        </h3>
          <ul className="navigation-list">
            <li>
              <a href="/animations/loadingspinners">Loading spinner</a>
            </li>
            <li>
              <a href="/animations/others">Others</a>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default SideNav;
