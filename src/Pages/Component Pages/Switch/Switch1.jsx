import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import SwitchComponentEmpty from "../../../components/Switch/SwitchComponentEmpty";

export default function Switch1() {
  const codeString = `import { useState } from 'react'; // Import useState for state management (optional)
import './switchcomponent.css';

export default function SwitchComponent() {
  const [isOn, setIsOn] = useState(false); // State to track toggle state (ON/OFF)

  const handleToggle = () => {
    setIsOn(!isOn); // Toggle state on click
  };
  return (
<div className={\`toggle \${isOn ? 'toggle-on' : ''}\`} id="switch" onClick={handleToggle}>  
    <div className='glow-comp'><div className='toggle-button'></div></div>
    
</div>
  );
}`;

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      console.log("Text copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
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

  const codeStringCss = `#switch {
  cursor: pointer;
  width: 55px;
  height: 30px;
}
.toggle {
  left: 2px;
  border: 2px solid #ffffff75;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}
.toggle.toggle-on {
  border-color: #fff;
  transition: all 0.3s ease-in-out;
}
.toggle-button {
  margin-left: 2px;
  margin-top: 3px;
  width: 20px;
  height: 20px;
  background-color: #ffffff75;
  border-radius: 19px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.toggle-on .toggle-button {
  position: relative;
  width: 20px;
  transform: translateX(26px);
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-header">
        <h1 id="switches">Switches</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Switch 1#</h2>
        </div>
        <div className="component-page-card-items">
          <SwitchComponentEmpty />
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
          <button id="copyButton" onClick={handleCopyClickCss}>
            Copy CSS
          </button>
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
