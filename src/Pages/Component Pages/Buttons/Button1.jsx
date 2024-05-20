import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Button1Component from "../../../components/Buttons/Button1Component";


export default function Button1() {
  const codeString = `<a><button className='button-1'>button</button></a>`;

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

  const codeStringCss = `.button-1 {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border: 1px solid #fff;
  width: 120px;
  height: 40px;
  background-color: #000;
  color: #fff;
}
.button-1:hover {
  border: 2px solid #fff;
}
.button-1:active {
  background-color: #ffffff2a;
}`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-header">
        <h1 id="buttons">Buttons</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Button simple</h2>
        </div>
        <div className="component-page-card-items">
          <Button1Component />
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
