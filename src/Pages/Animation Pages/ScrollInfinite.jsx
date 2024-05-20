import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import ScrollInfiniteHorizontal from "../../components/Scrolls/ScrollInfiniteHorizontal";


export default function ScrollInfinite() {
  const codeString = `export default function ScrollInfiniteHorizontal() {
  useEffect(() => {
    const handleWindowResize = () => {
      const scrollSectionWidth =
        document.querySelector(".scroll-section").clientWidth;
      document.documentElement.style.setProperty(
        "--scroll-section-width",
        \`\${scrollSectionWidth}px\`
      );
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="horizontal-scroll">
      <div className="scroll-section">
        <a
          className="scroll-infinite-text"
          href="https://www.linkedin.com/in/javiergarciadelafuente/"
          target="_blank">
          <h1>https://www.linkedin.com/in/javiergarciadelafuente/</h1>
        </a>
      </div>
      <div className="scroll-section" aria-hidden="true">
        <a
          className="scroll-infinite-text"
          href="https://www.linkedin.com/in/javiergarciadelafuente/"
          target="_blank">
          <h1>https://www.linkedin.com/in/javiergarciadelafuente/</h1>
        </a>
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

  const codeStringCss = `.horizontal-scroll {
  background-color: rgb(0, 0, 0);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  justify-items: flex-start;
  column-gap: 0px;
  &:hover {
    & .scroll-section {
      animation-play-state: paused;
    }
  }
  & .scroll-section {
    min-width: 100vw;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: nowrap;
    animation: scroll 8s linear infinite;
  }
}
.scroll-infinite-text {
  text-decoration: none;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
@keyframes scroll-horizontal-infinite {
  to {
    transform: translateX(calc(100vw * -1));
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
        <h1 id="buttons">Others animations</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Infinite horizontal scroll</h2>
        </div>
        <div className="component-page-card-items">
          <ScrollInfiniteHorizontal />
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
