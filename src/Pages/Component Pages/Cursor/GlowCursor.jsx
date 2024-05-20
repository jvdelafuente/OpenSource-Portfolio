import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from 'react';
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Glow from "../../../others/Glow";
import SwitchComponent from "../../../components/Switch/SwitchComponent";
import '../../../components/Switch/switchcomponent.css'

export default function GlowCursor() {
  const [isGlowActive, setIsGlowActive] = useState(false);


  const codeString = `import { useState, useEffect } from "react";

const Glow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInViewport(true);
    };

    const handleMouseEnter = () => {
      setIsMouseInViewport(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInViewport(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    width: "30px",
    height: "30px",
    boxShadow: "0px 0px 10px #fff",
    backgroundColor: "#ffffff73",
    borderRadius: "50%",
    transform: "translate(-70%, 50%)",
    display: isMouseInViewport ? "block" : "none",
    zIndex: "999",
  };
  return <div style={glowStyle}></div>;
};

export default Glow;`;

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

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };


  return (
    <div className="component-page-card-container">
      <div className="component-page-card-header">
        <h1 id="cursor">Cursor</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Glow</h2>
        </div>
        <div className="component-page-card-items">
          <h4>Use the switch to activate this effect.</h4>
          <SwitchComponent isGlowActive={isGlowActive} setIsGlowActive={setIsGlowActive}  /> 
          {isGlowActive && <Glow />}
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
        </div>
      </div>
    </div>
  );
}