import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import CardAboutPortfolio from "../../../../components/Cards/CardAboutPortfolio";


export default function CardAbout1() {
  const codeString = `<div className="card-social">
  <div className="card-h2-container">
    <h2>Social</h2>
  </div>
  <div className="card-p-container">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Eius culpa repellat sint. Iste molestias voluptatum dignissimos, 
    ipsum maiores, vitae, dolor at mollitia sit odit accusamus illum 
    eaque nihil enim voluptatibus!</p>
  </div>
  <div className="about-socials">
    <div className="about-social-each"><h3>Proactive</h3><h3>✔</h3>
    </div>
    <div className="about-social-each"><h3>Motivated</h3> <h3>✔</h3>
    </div>
    <div className="about-social-each"><h3>Quick learning</h3><h3>✔</h3>
    </div>
    <div className="about-social-each"><h3>Open</h3><h3>✔</h3>
    </div>
    <div className="about-social-each"><h3>Agile</h3><h3>✔</h3>
    </div>
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

  const codeStringCss = `.card-social {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  font-family: monospace;
  border-radius: 25px;
  padding: 1%;
  background-color: #001b2e;
  width: 18vw;
  height: auto;
}
.card-social h2 {
  justify-self: start;
  text-align: center;
  font-size: clamp(10px, 2vw, 25px);
}
.card-h2-container {
  font-style: normal;
  justify-self: start;
}
.card-p-container {
  margin-bottom: 5%;
  font-size: clamp(10px, 1vw, 14px);
  align-self: center;
  width: 80%;
}
.about-socials {
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  width: 80%;
}
.about-socials h3 {
  font-size: clamp(10px, 2vw, 15px);
  margin: 0;
}
.about-social-each {
  padding-left: 5%;
  padding-right: 5%;
  margin: 2%;
  background-color: white;
  color: #001b2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
          <h2>Soft skills card</h2>
        </div>
        <div className="component-page-card-items">
          <CardAboutPortfolio />
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
