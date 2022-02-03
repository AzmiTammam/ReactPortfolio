import react from "react";
import reactDom from "react-dom";
import { Link } from "react-scroll";

import './Navbar.css'
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {


      return(
            <nav>
                  <div className="headTitle">
                  <h3>
                        Azmi Portfolio
                  </h3>
                  </div>
                  <div className="navLinks">
                  <ul>
                        <li><Link to="#projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li><Link to="#header" spy={true} smooth={true} offset={50} duration={500}>Resume</Link></li>
                        <li><Link to="#experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link></li>
                        <li><MdOutlineDarkMode /></li>
                  </ul>
                  </div>
            </nav>
      );
}

export default Navbar;