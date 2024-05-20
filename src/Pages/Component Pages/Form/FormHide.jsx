import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import Form1 from "../../../components/Forms/Form1";


export default function FormHide() {
  const codeString = `const Form1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button
        className={\`form-button \${isOpen ? "active" : ""}\`}
        onClick={toggleAccordion}
      >
        <h2 className="emailform-h2">
          Send email
          <svg
            className={\`form-svg \${isOpen ? "rotate" : ""}\`}
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 
                16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 
                10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 
                9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 
                9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </h2>
      </button>
      {isOpen && (
        <div className="form-container">
          <form className="form-horizontal">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailField"
              placeholder="Email"
            />
            <label id="form-name-text" htmlFor="exampleInputPassword">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameField"
              placeholder="Name"
            />

            <div className="textarea">
              <textarea
                className="form-control"
                rows="5"
                id="emailBody"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-submit-button-container">
              <a className="form-submit-button">Send</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form1;`;

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

  const codeStringCss = `.emailform-h2 {
  padding: 5px;
  font-weight: 400;
  align-items: center;
  display: flex;
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin: 0;
}
.form-container {
  animation: form-slide-in-top 0.5s both;
  font-family: "Poppins", sans-serif;
  color: #fff;
}
.form-horizontal {
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  max-width: 500px;
  max-height: 300px;
  min-width: 50%;
  padding: 15px;
  text-align: start;
}
.textarea {
  width: 100%;
}
.textarea textarea {
  width: 100%;
  margin: 0;
  padding: 0;
}
#emailBody {
  outline: none;
  box-sizing: border-box;
  padding: 5px;
  background-color: #ffffffec;
  border: none;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
}
#emailBody:focus {
  border: none;
  box-shadow: none;
  background-color: #fff;
}
#nameField,
#emailField {
  outline: none;
  box-sizing: border-box;
  padding: 5px;
  font-family: "Poppins", sans-serif;
  min-height: 27px;
  background-color: #ffffffec;
  border: none;
}
#nameField:focus,
#emailField:focus {
  background-color: #ffffff;
  border: none;
}
#form-name-text {
  margin-top: 10px;
}
.container {
  min-width: 200px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  width: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
}
.form-button {
  max-width: 180px;
  background: #000;
  border: solid 1px #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-button:before {
  content: "";
  position: relative;
  right: 0;
  transform: rotate(90deg);
  transition: all 0.2s ease-in-out;
}
.form-button:after {
  content: "";
  position: relative;
  right: 0;
}
.form-submit-button {
  user-select: none;
  cursor: pointer;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  padding: 0;
}
.form-submit-button:hover {
  outline: 2px solid #fff;
  outline-offset: -2px;
}
.form-submit-button:active {
  background-color: #ffffff2a;
}
.form-submit-button-container {
  width: 100%;
  display: flex;
  justify-content: end;
}
.form-svg {
  animation: rotate-invert 0.2s ease-in-out forwards;
}
.form-svg.rotate {
  animation: rotate 0.2s ease-in-out forwards;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
}
@keyframes rotate-invert {
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0deg);
  }
}
@keyframes form-slide-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    display: none;
    opacity: 0;
  }
  30% {
    display: none;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    display: block;
    opacity: 1;
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
        <h1 id="forms">Forms</h1>
      </div>
      <div className="component-page-card-item-container">
        <div className="component-page-card-h2-item">
          <h2>Form hide</h2>
        </div>
        <div className="component-page-card-items">
          <Form1 />
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
