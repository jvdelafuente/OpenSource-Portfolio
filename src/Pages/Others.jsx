import "./others.css";
import weshare from "../assets/Others/wesharepdf.pdf";

export default function Others() {
  return (
    <div className="others-container">
      <div className="others-header">
        <h1>
          Ideas <span>/</span> Projects
        </h1>
        <p>
          Explore my ideas and projects on my{" "}
          <a
            href="https://github.com/jvdelafuente?tab=repositories"
            target="_blank"
          >
            github repository
          </a>
        </p>
      </div>
      <div className="others-content">
        <div id="weShare" className="others-iframe-container">
          <iframe className="weshare-pdf" src={weshare}></iframe>
          <div className="about-project-item-button">
            <a
              href="https://github.com/jvdelafuente/WeShare-FinalBootcampProject"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>

        <div id="iframe-web-id" className="others-iframe-container">
          <a href="https://other-1-jvdlf.netlify.app" target="_blank">
            <iframe
              className="others-iframe-item"
              src="https://other-1-jvdlf.netlify.app"
            ></iframe>
          </a>
          <div className="about-project-item-button">
            <a href="https://other-1-jvdlf.netlify.app" target="_blank">
              Live preview
            </a>
            <a
              href="https://github.com/jvdelafuente/other-1/tree/main"
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
        <div id="iframe-web-id" className="others-iframe-container">
          <a href="" target="_blank">
            <iframe
              id="iframe-fullscreen"
              className="others-iframe-item"
              src="https://other-2-jvdlf.netlify.app"
            ></iframe>
          </a>
          <div className="about-project-item-button">
            <a href="https://other-2-jvdlf.netlify.app" target="_blank">
              Live preview
            </a>
            <a href="https://github.com/jvdelafuente/other-2" target="_blank">
              Repository
            </a>
          </div>
        </div>


        <div id="iframe-web-id" className="others-iframe-container">
          <a href="https://jvmypiano.netlify.app" target="_blank">
            <iframe
              className="others-iframe-item"
              src="https://jvmypiano.netlify.app"
            ></iframe>
          </a>
          <div className="about-project-item-button">
            <a href="https://jvmypiano.netlify.app" target="_blank">
              Live preview
            </a>
            <a href="https://github.com/jvdelafuente/MyPiano" target="_blank">
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
