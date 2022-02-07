import react from "react";
/* import { Link } from "react-scroll"; */
import { Link } from "react-router-dom";
import './Navbar.css';
import { MdOutlineDarkMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function Navbar() {
      const showMobileNav = () => {
            let elements = document.querySelectorAll('.navLinks ul li')
            for (let i = 0; i < elements.length; i++) {
                  elements[i].classList.toggle('hideLi');
            }
      }
      return(
            <nav>
                  <div className="headTitle" id="nav">
                  <h3>
                        <Link to="/">Azmi Portfolio</Link>
                  </h3>
                  </div>
                  <div className="navLinks">
                  <ul>
                        <li className="hum hideLi"><Link to="/#projects" >Projects</Link></li>
                        <li className="hum hideLi"><Link to="/#header" >Resume</Link></li>
                        <li className="hum hideLi"><Link to="/#experience" >Experience</Link></li>
                        <li className="hum hideLi"><Link to="/login">Login</Link></li>
                        <li className="hum hideLi"><p><MdOutlineDarkMode /></p></li>
                        <button id="MobileNav" className="mobileNav" onClick={showMobileNav}><FaBars /></button>
                  </ul>
                  </div>
            </nav>
      );
}

export default Navbar;