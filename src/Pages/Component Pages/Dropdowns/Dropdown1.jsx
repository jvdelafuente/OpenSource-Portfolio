import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import DropdownSmall from "../../../components/Dropdowns/DropdownSmall";


export default function Dropdown1() {
  const codeString = `export default function DropdownSmall() {
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="dropdown-nav-container">
      <div className="dropdown-button-content" onClick={toggleMenu}>
        <h3>
          Open menu
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 
                16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 
                10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 
                9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 
                9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </h3>
      </div>
      <div
        className={\`menu-dropdown \${isActive ? "active" : ""}\`}
        ref={menuRef}
      >
        <ul>
          <li>
            <a className="dropdown-list-item">Profile</a>
          </li>
          <li>
            <a className="dropdown-list-item">Inbox</a>
          </li>
          <li>
            <a className="dropdown-list-item">Settings</a>
          </li>
          <li>
            <a className="dropdown-list-item">Help</a>
          </li>
          <li>
            <a className="dropdown-list-item">Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}`;

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  const handleCopyClickCss = () => {
    navigator.clipboard
      .writeText(codeStringCss)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  const codeStringCss = `.dropdown-nav-container {
  user-select: none;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 50px;
  width: 150px;
  color: #fff;
  background: #000;
  border: 1px solid #fff;
}
.dropdown-nav-container h3 {
  padding: 5px;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin: 2px;
  font-weight: 500;
}
.menu-dropdown {
  position: absolute;
  top: calc(100% + 0px);
  right: 16px;
  width: 150px;
  min-height: 100px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: left 300ms;
}
.menu-dropdown.active {
  border: 1px solid #fff;
  background-color: #00000000;
  animation: dropdown-slide-in-top 0.3s both;
  margin: 0;
  padding: 0;
  width: 150px;
  opacity: 1;
  left: -1px;
  transform: translateY(10px);
  visibility: visible;
}
.menu-dropdown ul {
  width: 50px;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: #000;
}
.menu-dropdown ul li {
  background-color: #000;
  margin: 0;
  list-style: none;
  font-size: 16px;
  width: 149px;
}
.menu-dropdown ul li:hover .dropdown-list-item {
  color: #ea580c;
}
.menu-dropdown a:focus {
  color: #ea580c;
  border-left: 1px solid #ea580c;
}
.menu-dropdown ul li .dropdown-list-item {
  margin: 10px 5px 10px 5px;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
}
@keyframes dropdown-slide-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    display: none;
    opacity: 0;
  }
  30% {
    display: none;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    display: block;
    opacity: 1;
  }
}`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-header">
        <h1 id="dropdown">Dropdowns</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Dropdown Small</h2>
        </div>
        <div id="index-dropdown-container" className="component-page-card-items">
          <DropdownSmall />
        </div>
      </div>

      <div className="component-page-card-content-container">
        <div className="component-page-card-h2-content">
          <h2>Source code</h2>
        </div>
        <div className="component-page-card-content-items">
          <button id="copyButton" onClick={handleCopyClick}>
            Copy JSX
          </button>
          <SyntaxHighlighter
            language={jsx}
            style={atomOneDark}
            customStyle={customStyle}
            showLineNumbers
          >
            {codeString}
          </SyntaxHighlighter>
          <button id="copyButton" onClick={handleCopyClickCss}>Copy CSS</button>
          <SyntaxHighlighter
            language={CSS}
            style={atomOneDark}
            customStyle={customStyle}
            showLineNumbers
          >
            {codeStringCss}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
