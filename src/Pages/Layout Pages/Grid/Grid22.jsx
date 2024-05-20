import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Grid22 from "../../../Layouts/Grid2-2";

export default function Grid22Page() {
  const codeString = `<div className="grid2-2-container">
  <div className="div1">
    <h3> 1</h3>
  </div>
  <div className="div2">
    <h3> 2</h3>
  </div>
  <div className="div3">
    <h3> 3</h3>
  </div>
  <div className="div4">
    <h3> 4</h3>
  </div>
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

  const codeStringCss = `.grid2-2-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
.div1 {
  grid-area: 1 / 1 / 2 / 4;
  border: 1px solid #fff;
  padding: 10px;
}
.div2 {
  grid-area: 1 / 4 / 2 / 6;
  border: 1px solid #fff;
  padding: 10px;
}
.div3 {
  grid-area: 2 / 3 / 3 / 6;
  border: 1px solid #fff;
  padding: 10px;
}
.div4 {
  grid-area: 2 / 1 / 3 / 3;
  border: 1px solid #fff;
  padding: 10px;
}
@media (max-width: 720px) {
  .grid2-2-container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 5;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 5;
  }
  .div3 {
    grid-area: 3 / 1 / 4 / 5;
  }
  .div4 {
    grid-area: 4 / 1 / 5 / 5;
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
          <h2>Grid 2#</h2>
        </div>
        <div className="component-page-card-items">
          <Grid22 />
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
