import react from "react";
import { Link } from "react-router-dom";
import './Footer.css';
function Footer() {
      let year = new Date()
      return(
            <footer>
                  <div className="topFooter">
                  </div>
                  <div className="copyright">
                  <p>Copyright © 2021 - {year.getFullYear()} <a href="https://twitter.com/azzmmii" target="_blank">Azmi Al-Tammam</a>, AT All rights reserved.</p>
                  </div>
            </footer>
      )
}

export default Footer;