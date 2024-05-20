import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Button2Component from "../../../components/Buttons/Button2Component";


export default function Button2() {
  const codeString = `<a><button className='button-2'>button</button></a>`;

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

  const codeStringCss = `.button-2 {
  transform: translateY(-5px)
    matrix3d(1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 0px 0px 0px;
  box-shadow: 0px 5px 0px #ffffff9c;
  display: inline-block;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 120px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: solid 2px #fff;
  transition: all 0.1s ease-in-out;
}
.button-2:hover {
  transform: translateY(-5px)
    matrix3d(1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 0px 0px 0px;
  box-shadow: 0px 6px 0px #ffffffd2;
  top: -0.5px;
  transition: all 0.1s ease-in-out;
}
.button-2:active {
  transform: translateY(0px)
    matrix3d(1, 0, 0, 0, 0, 1, 0, -0.001, 0, 0, 1, 0, 0, 0, 0, 1);
  top: 1px;
  box-shadow: 0px 0px 0px;
}`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Button 3d</h2>
        </div>
        <div className="component-page-card-items">
          <Button2Component />
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
