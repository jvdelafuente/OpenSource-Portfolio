import { useState } from "react";
import "./form1.css";

const Form1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-container">
      <button
        className={`form-button ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h2 className="emailform-h2">
          Send email
          <svg
            className={`form-svg ${isOpen ? "rotate" : ""}`}
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
                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
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
            <label className="form-name-text" htmlFor="exampleInputPassword">
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

export default Form1;
