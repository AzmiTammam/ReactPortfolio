import react, { useState } from "react";
import { Link } from "react-router-dom";

import "./Experience.css";
import Orange from "../../Data/orange";
import Freelance from "../../Data/freelance";

function Experience() {
      const [hidden, setHidden] = useState(true);

  return (
    <div className="experience">
      <aside className="companyName">
        <ul>
          <li className="active" id="orange">
            <button onClick={() => setHidden(true)}>Orange</button>
          </li>

          <li id="freelance">
            <button onClick={() => setHidden(false)}>Freelance</button>
          </li>
        </ul>
      </aside>
      
      {!hidden ?  <Freelance /> : <Orange /> }

    </div>
  );
}

export default Experience;
