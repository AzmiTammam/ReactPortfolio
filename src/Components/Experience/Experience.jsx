import react from "react";
import { Link } from "react-router-dom";

import "./Experience.css";
import Orange from "../../Data/orange";
import Freelance from "../../Data/freelance";

function Experience() {
      
  return (
    <div className="experience">
      <aside className="companyName">
        <ul>
          <li className="active" id="orange">
            <Link to="/">Orange</Link>
          </li>

          <li id="freelance">
            <Link to="/">Freelance</Link>
          </li>
        </ul>
      </aside>
      

    </div>
  );
}

export default Experience;
