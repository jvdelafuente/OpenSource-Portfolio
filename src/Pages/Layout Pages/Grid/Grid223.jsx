import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Grid223 from "../../../Layouts/Grid2-2-3";

export default function Grid223Page() {
  const codeString = `<div className="grid223-container">
  <div id="grid1">
    <h3>1</h3>
  </div>
  <div id="grid2">
    <h3>2</h3>
  </div>
  <div id="grid3">
    <h3>3</h3>
  </div>
  <div id="grid4">
    <h3>4</h3>
  </div>
  <div id="grid5">
    <h3>5</h3>
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

  const codeStringCss = `.grid223-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
#grid1 {
  border: 1px solid #fff;
  padding: 10px;
  grid-area: 1 / 1 / 2 / 3;
}
#grid2 {
  border: 1px solid #fff;
  padding: 10px;
  grid-area: 2 / 1 / 3 / 3;
}
#grid3 {
  border: 1px solid #fff;
  padding: 10px;
  grid-area: 1 / 3 / 4 / 4;
}
#grid4 {
  border: 1px solid #fff;
  padding: 10px;
  grid-area: 3 / 1 / 4 / 2;
}
#grid5 {
  border: 1px solid #fff;
  padding: 10px;
  grid-area: 3 / 2 / 4 / 3;
}
@media (max-width: 1060px) {
  .grid223-container {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  #grid1 {
    grid-area: 1 / 1 / 2 / 5;
  }

  #grid2 {
    grid-area: 2 / 1 / 3 / 5;
  }

  #grid3 {
    grid-area: 3 / 1 / 4 / 5;
  }

  #grid4 {
    grid-area: 4 / 1 / 5 / 3;
  }

  #grid5 {
    grid-area: 4 / 3 / 5 / 5;
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
        <h1 id="buttons">Grid</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Grid 1#</h2>
        </div>
        <div className="component-page-card-items">
          <Grid223 />
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
