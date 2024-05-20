import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import AccordionOriginal from "../../../components/Accordions/AccordionOriginal";



export default function Accordion1() {
  const codeString = `export default function AccordionOriginal() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="container">
      <div
        className={\`card \${activeCard === 0 ? 'active' : ''}\`}
        onClick={() => handleCardClick(0)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop">
        </div>
      </div>

      <div
        className={\`card \${activeCard === 1 ? 'active' : ''}\`}
        onClick={() => handleCardClick(1)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop"></div>
      </div>

      <div
        className={\`card \${activeCard === 2 ? 'active' : ''}\`}
        onClick={() => handleCardClick(2)}
      >
        <img className="background" src={img1} alt="" />
        <div className="card-content">
          <h2 className="description">Tittle placeholder</h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Temporibus, dignissimos reiciendis veniam deleniti illum voluptas perspiciatis laboriosam.</p>
        </div>
        <div className="backdrop"></div>
      </div>
    </div>
  );
}`;

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

  const codeStringCss = `img {
  width: 100%;
  height: 100%;
  display: block;
}
.container {
  padding: 5px;
  overflow: hidden;
  width: 800px;
  height: 300px;
  display: flex;
  gap: 10px;
  margin-inline: 50px;
}
.card {
  filter: grayscale(2);
  cursor: pointer;
  border: 1px solid #fff;
  min-width: 80px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  position: relative;
  transition: flex-grow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.card.active {
  filter: grayscale(2) brightness(1);
  flex-grow: 100;
}
.card .background {
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.4);
  transition: 0.3s ease;
}
.card:hover .background,
.card.active .background {
  filter: brightness(1);
}
.card .card-content {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 10px;
  right: 10px;
  overflow: hidden;
  z-index: 10;
}
.card:hover .card-content {
  top: auto;
}
.card-content .description {
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
}
.card-content {
  display: none;
  opacity: 0;
}
.card-content h2 {
  margin: 0;
}
.card.active .card-content {
  transition: opacity 0.5s ease-in;
  display: block;
  color: #ffffff;
  opacity: 1;
}
.card .backdrop {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  z-index: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 1) 70%);
}
@media (max-width: 1300px) {
  .container {
    overflow: hidden;
    width: 100%;
    height: 300px;
    gap: 5px;
    margin-inline: 0px;
  }
  .card {
    min-width: 45px;
  }
  .card-content h2 {
    font-size: 20px;
  }
  .card-content p {
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  .card-content h2 {
    font-size: 15px;
  }
  .card-content p {
    font-size: 11px;
  }
    .card .backdrop {
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.479) 0%);
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
        <h1 id="accordions">Accordions</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Accordion 1#</h2>
        </div>
        <div className="component-page-card-items">
          <AccordionOriginal />
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
