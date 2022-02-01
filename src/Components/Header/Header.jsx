import react from "react";
import reactDom from "react-dom";
import './Header.css';
import myImg from '../../Images/myImg.JPEG';

function Header() {
      return(
            <header>
                  <div className="imgSection">
                        <img src={myImg} alt="my img" />
                  </div>
                  <div className="infoSection">
                        <h5>Hey, I'm</h5>
                        <h2>Azmi Al-Tammam</h2>
                  </div>
            </header>
      )
}

export default Header;