import react from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
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
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to="#resume">Resume</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li><MdOutlineDarkMode /></li>
                  </ul>
                  </div>
            </nav>
      );
}

export default Navbar;