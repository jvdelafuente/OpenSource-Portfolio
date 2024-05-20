import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import CardBlurComponent from "../../../components/Cards/card-blur/CardBlurComponent";


export default function CardBlur() {
  const codeString = `<div className="card-blur">
    <div className="img-container">
      <img src={img1} alt="" />
    </div>
    <div className="content-container">
      <h2>Tittle Placeholder</h2>
      <p>Qui molestias est provident asperiores corporis dolorem 
      explicabo consequatur aspernatur ipsam saepe voluptatibus, 
      officia tempora vero soluta, ea cumque dolorum? Totam, neque.</p>
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

  const codeStringCss = `.card-blur {
  width: 400px;
  height: auto;
  position: relative;
}
.card-blur .img-container {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.card-blur .img-container img {
  filter: grayscale(1);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 90%;
  border-radius: inherit;
  transition: 0.5s ease-in-out;
}
.card-blur::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 0.4s ease-in-out;
}
.card-blur:hover img {
  filter:grayscale(1) brightness(0.4) blur(2px);
}
.card-blur:hover::after {
  opacity: 1;
  inset: 20px;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85%;
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.content-container h2,
.content-container p {
  opacity: 0;
  transition: 0.4s 0.2s ease;
  overflow: hidden;
}
.content-container h2 {
  font-size: clamp(10px, 23px, 30px);
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 10%;
  scale: 0.3;
    font-family: 'Poppins', sans-serif;
}
.content-container p{
  font-family: 'Poppins', sans-serif;
  line-height: 1.1;
  font-size: clamp(5px, 12px, 20px);
  color: #fff;
  scale: 0.3;
}
.card-blur:hover .content-container h2 {
  scale: 1;
  opacity: 1;
}
.card-blur:hover .content-container P {
  opacity: 1;
  scale: 1;
}`;

  const customStyle = {
    lineHeight: "1.5",
    fontSize: "clamp(10px, 14px, 20px)",
    backgroundColor: "#0c0a09",
  };

  return (
    <div className="component-page-card-container">
      <div className="component-page-card-header">
        <h1 id="cards">Cards</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Image card</h2>
        </div>
        <div className="component-page-card-items">
          <CardBlurComponent />
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
