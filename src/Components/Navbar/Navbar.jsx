import react from "react";
/* import { Link } from "react-scroll"; */
import { Link } from "react-router-dom";
import './Navbar.css';
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {


      return(
            <nav>
                  <div className="headTitle">
                  <h3>
                        <Link to="/">Azmi Portfolio</Link>
                  </h3>
                  </div>
                  <div className="navLinks">
                  <ul>
                        <li><Link to="/#projects" >Projects</Link></li>
                        <li><Link to="/#header" >Resume</Link></li>
                        <li><Link to="/#experience" >Experience</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><MdOutlineDarkMode /></li>
                  </ul>
                  </div>
            </nav>
      );
}

export default Navbar;