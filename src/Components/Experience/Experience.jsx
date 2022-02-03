import react, { useState } from "react";
import { Link } from "react-router-dom";

import "./Experience.css";
import Orange from "../../Data/orange";
import Freelance from "../../Data/freelance";

function Experience() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="experience" id="#experience">
          <h5 className="expTitle">Experience</h5>
      <div className="expContainer">
        <aside className="companyName">
          <ul>
            <li className={hidden ? "active" : null} id="orange">
              <button onClick={() => setHidden(true)}>Orange</button>
            </li>

            <li className={hidden ? null : "active"} id="freelance">
              <button onClick={() => setHidden(false)}>Freelance</button>
            </li>
          </ul>
        </aside>

        {!hidden ? <Freelance /> : <Orange />}
      </div>
    </div>
  );
}

export default Experience;
