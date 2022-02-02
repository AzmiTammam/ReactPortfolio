import react from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

function Experience() {
      const toggleExpInfo = useRef();
      const changeExpInfo = () => {

      }

  return (
    <div className="experience">
      <aside className="companyName">
        <ul>
          <li className="active" id="orange">
            <Link to="/">
            Orange
            </Link>
          </li>

          <li id="freelance">
            <Link to="/">
            Freelance
            </Link>
          </li>
        </ul>
      </aside>
      <div className="companyInfo orange">
        <div className="positionData">
          <p className="position">Full-Stack Web Developer</p>
          <p className="positionDate">2021 Sep - 2022 Mar</p>
        </div>
        <p className="positionAddress">Amman - Jordan</p>
        <p className="positionBio">
          Bootcamp by Orange (Coding Academy) <br />
          <br />
          High-quality training, Enhances my skills in Web Development, Mobile
          Applications,
          <br /> and being creative in creating new ideas, and it did Fortify my
          programming knowledge and increase my knowledge in everything new in
          the world of technology. <br />
          <br />
          - Developed front-end web applications using HTML5, CSS3, Bootstrap,
          SASS, jQuery, JS, and React JS.
          <br />
          - Developed back-end web apps using PHP, Laravel, MySQL, RESTful API.
          <br />
          - Create static and adaptive web user interfaces.
          <br />
          - Create mockups for an application.
          <br />
          - Develop dynamic web user interfaces.
          <br />
          - Create a user interface with content management.
          <br />
          - Creating business models.
          <br />
          - UI/UX and visual Identity.
          <br />
          - WordPress.
          <br />
        </p>
      </div>
      <div className="companyInfo freelance hideExp">
                        <div className="positionData">
                        <p className="position">Web Developer</p>
                        <p className="positionDate">2021 May - Present</p>
                        </div>
                        <p className="positionAddress">Remote</p>
                        <p className="positionBio">
                        Develop web applications and dynamic web user interfaces.
                        </p>
                  </div>
    </div>
  );
}

export default Experience;
