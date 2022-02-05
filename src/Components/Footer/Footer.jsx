import react from "react";
import { Link } from "react-router-dom";
import './Footer.css';
function Footer() {
      let year = new Date()
      return(
            <footer>
                  <div className="copyright">
                  <p>Copyright © {year.getFullYear()} Developed and designed by <a href="https://twitter.com/azzmmii" target="_blank" rel="noreferrer">Azmi Al-Tammam</a>, AT All rights reserved.</p>
                  </div>
            </footer>
      )
}

export default Footer;