import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import LoadingSpinnerBalls from "../../components/Loadingspinners/LoadingSpinnerBalls";


export default function LSBalls() {
  const codeString = `<div className='loadingspinnerballs-container'>
  <div id='loadingBall' className='loadinspinner-ball1'></div>
  <div id='loadingBall' className='loadinspinner-ball2'></div>
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

  const codeStringCss = `.loadingspinnerballs-container {
  width: 120px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#loadingBall {
  width: 40px;
  height: 40px;
  border-radius: 25px;
}
.loadinspinner-ball1 {
  transform: translateY(15px);
  background-color: #ea5a0cd8;
  animation: balls-moves 1.5s both infinite ease-in-out;
}
.loadinspinner-ball2 {
  background-color: #ffffffd0;
  animation: balls-moves-bottom 1.5s both infinite ease-in-out;
}
@keyframes balls-moves {
  0% {
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
  }
}
@keyframes balls-moves-bottom {
  0% {
  }
  50% {
    transform: translateY(30px);
  }
  100% {
  }
}
`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Loading balls</h2>
        </div>
        <div className="component-page-card-items">
          <LoadingSpinnerBalls />
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
