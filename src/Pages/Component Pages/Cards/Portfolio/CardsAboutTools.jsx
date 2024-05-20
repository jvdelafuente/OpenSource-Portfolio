import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import CardAboutPortfolioTools from "../../../../components/Cards/CardAboutPortfolioTools";



export default function CardAbout2() {
  const codeString = `    <div className="card-img">
      <div className="card-img-container">
        <img src={img1} alt="" />
      </div>
      <div className="card-p-container">
        <h2>Tittle placeholder</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius culpa
          repellat sint.
        </p>
      </div>
      <div className="about-button">
        <button>Click here</button>
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

  const codeStringCss = `.card-img {
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  padding: 1%;
  background-color: #000;
  border: 1px solid #ffffff7a;
  width: 350px;
  min-height: 430px;
}

.card-img p {
  font-weight: 300;
  margin-bottom: 15%;
}

.card-img h2 {
  font-weight: 300;
  justify-self: start;
  text-align: center;
  font-size: clamp(10px, 26px, 30px);
}
.card-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 190px;
}
.card-img-container img {
  filter: grayscale(1);
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: transform 0.5s ease-in-out;
}

.card-img-container img:hover {
  object-fit: cover;
  transform: scale(1.05);
  border-radius: 5px;
}

.card-p-container {
  font-size: clamp(10px, 15px, 20px);
  align-self: center;
  width: 80%;
}

.about-button {
  text-align: center;
  margin-bottom: 2%;
  align-self: flex-end;
  margin-right: 5%;
}

.about-button button {
  height: 40px;
  width: 100px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  border: 1px solid white;
  background-color: #000;
  color: white;
}
.about-button button:hover {
  border: 1.5px solid #ea580c;
}
.about-button button:active {
  border: 2px solid #ea580c;
  color: #ea580c;
}
`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(8px, 13px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Image button card</h2>
        </div>
        <div className="component-page-card-items">
          <CardAboutPortfolioTools />
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
