import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import LoadingSpinnerSquare from "../../components/Loadingspinners/LoadingSpinnerSquare";


export default function LSSquare() {
  const codeString = `<div className="loading-spinner-square">
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

  const codeStringCss = `.loading-spinner-square {
  width: 50px;
  aspect-ratio: 1;
  display: flex;
  color: #fff;
  background: linear-gradient(currentColor 0 0) right / 51% 100%,
    linear-gradient(currentColor 0 0) bottom / 100% 51%;
  background-repeat: no-repeat;
  animation: square-rotate 3s infinite linear 0.25s forwards;
  border-radius: 2px;
}
.loading-spinner-square::before {
  border-radius: 2px;
  color: #ea580c;
  content: "";
  width: 50%;
  height: 50%;
  background: currentColor;
  animation: square-perspective 0.75s infinite linear;
}
@keyframes square-rotate {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes square-perspective {
  0% {
    transform: perspective(80px) rotate3d(-1, -1, 0, 0);
  }
  80%,
  100% {
    transform: perspective(80px) rotate3d(-1, -1, 0, -180deg);
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
        <h1 id="buttons">Loading Spinners</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Loading square</h2>
        </div>
        <div className="component-page-card-items">
          <LoadingSpinnerSquare />
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
