import react from "react";
import "./Header.css";
import myImg from "../../Images/myImg.JPEG";
import $ from "jquery";
import { BsDownload } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import resume from './resume.pdf';

function Header() {
  var movementStrength = 25;
  var w = $(window).width();
  var h = $(window).height();

  $(window).mousemove(function (e) {
    var pageX = (e.pageX - w / 4) / w / 4;
    var pageY = (e.pageY - h / 4) / h / 4;
    var newvalueX = pageX * movementStrength;
    var newvalueY = pageY * movementStrength;
    $(".myImg").css({
      left: newvalueX + "px",
      top: newvalueY + "px",
    });
  });
  return (
    <header id="#header">
      <div className="imgSection">
        <img src={myImg} className="myImg" alt="my img" />
      </div>
      <div className="infoSection">
      <div className="title">
      <h5>Hey, I'm</h5>
        <h1>Azmi Al-Tammam</h1>
      </div>
      <div className="about">
            <p>Web Development is a passion of mine as a Software Engineering. Fulfilling this passion, I took several great courses and became a trainee at the Coding Academy by Orange in Full Stack Web Development for 7 months, I am Motivated by the curiosity about the way life is being transformed by technology.</p>
      </div>
      <div className="socialLinks">
            <ul>
                  <li><a href={resume} target="_blank" rel="noreferrer" >
                    <span><BsDownload /></span> Download Resume</a>
                        </li>
                    <li>
                  <a href="mailto:azmiTammam@gmail.com">
                  <span><HiOutlineMail /></span> Send an email
                    </a>
                    </li>
                    <li>
                  <a href="https://www.linkedin.com/in/azzmmii/" target="_blank" rel="noopener noreferrer">
                  <span><FaLinkedinIn /></span> LinkedIn
                    
                    </a>
                    </li>
                    <li>
                  <a href="https://github.com/AzmiTammam" target="_blank" rel="noopener noreferrer">
                  <span><BsGithub /></span> Github
                      </a>
                      </li>
            </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;
