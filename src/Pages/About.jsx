/* eslint-disable react/no-unescaped-entities */
import "./about.css";

export default function About() {
  return (
    <div id="aboutProject" className="about-container">
      <div className="about-content">
        <div id="aboutMe" className="about-me">
          <h1>A Bit About Me</h1>
          <div className="about-me-content">
            <p>
              Javier García de la Fuente - Full-Stack Web Developer | Creative,
              patient, and proactive with a strong initiative, I'm eager to
              leverage my skills in the programming world and continuously learn
              to grow professionally. I am eager to enter the world of
              programming and committed to continuous learning and professional
              growth in this field. Feel free to connect or follow me on my{" "}
              <a href="https://www.linkedin.com/in/javiergarciadelafuente/" target="_blank">Linkedin</a>.
            </p>
            <h3>Technical Expertise:</h3>
            <p>
              <span>Front-End: </span> React, JavaScript, Bootstrap and CSS. 
              <br/><br/><span>Back-End: </span> 
              Node.js and MySQL. <br/><br/><span>Version Control: </span>Git
              and Gitbash.
              <br/><br/><span>API Testing:</span> Postman. <br/><br/><span>Continuous Learning: </span> Tailwind CSS, Astro & TypeScript (basics of OOP & type systems).
            </p>
            <br/><br/><p>You can view some of my work in the <a href="/projects">projects</a> section.</p>
          </div>
        </div>
        <div className="about-project">
          <h1>About the project</h1>
          <div className="about-project-content">
            <p>
              This project was conceived as a departure from the typical
              portfolio. <br />
              <br /> My goal was to improve my skills, learn new things and
              humbly contribute something that could be of value to others.{" "}
              <br />I recognize that I have a lot to learn and improve, and I am
              aware that the content of the project can be improved. <br />
              <br />
              The inspiration for this project came from the desire to strike a
              balance between creating a design system and a portfolio, avoiding
              the conventional approach and adding a unique touch to the
              standard format. <br />
              <br />
              For a deeper exploration of the project, download this{" "}
              <a href="">README</a> file or visit the{" "}
              <a href="">GitHub repository</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
