import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import LoadingSpinnerLanes from "../../components/Loadingspinners/LoadingSpinnerLanes";


export default function LSLines() {
  const codeString = `<div className="loading-spinner-lanes">
  <span id='spinnerLanes' className='loading-spinner-lane1'></span>
  <span id='spinnerLanes' className='loading-spinner-lane2'></span>
  <span id='spinnerLanes' className='loading-spinner-lane3'></span>
</div>`;

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

  const codeStringCss = `.loading-spinner-lanes {
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.loading-spinner-lane2 {
  border-radius: 10px;
  width: 60px;
  height: 5px;
  background-color: #fff;
  margin: 15px 0px;
}
.loading-spinner-lane1,
.loading-spinner-lane3 {
  border-radius: 10px;
  width: 60px;
  height: 5px;
  background-color: #fff;
}
.loading-spinner-lane1 {
  animation: lanes-1-move 1.2s infinite both;
}
.loading-spinner-lane2 {
  animation: lanes-1-move 1.2s infinite both;
  animation-delay: 0.4s;
  background-color: #ea580c;
}
.loading-spinner-lane3 {
  animation: lanes-1-move 1.2s infinite both;
  animation-delay: 0.8s;
}
@keyframes lanes-1-move {
  0% {
  }
  50% {
    width: 40px;
  }
  100% {
  }
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
          <h2>Loading lines</h2>
        </div>
        <div className="component-page-card-items">
          <LoadingSpinnerLanes />
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
