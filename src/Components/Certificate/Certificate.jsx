import React from "react";
import "./Certificate.css";
import certificateData from "../../Data/certificateData";
import { FaCertificate } from "react-icons/fa";


function Certificate() {
  return (
    <div className="certificate" id="#Certificate">
      <span></span>
      <h1>Certificates</h1>
      <div className="containerCertificate">
        {certificateData.map((certificate) => (
          <div className="certificateCard" key={certificate.id}>
            <div className="img">
              <img src={certificate.img} loading="lazy" alt={certificate.imgAlt} />
            </div>
            <div className="body">
            <div className="info">
              <p className="title">{certificate.title}</p>
              <p className="description">{certificate.description}</p>
              <img src={certificate.companyLogo} loading="lazy" alt={certificate.imgAlt} />
            </div>
            <div className="buttons">
              <div className="socialLinks">
                <ul>
                  <li>
                  <a href={certificate.repoLink} target="_blank" rel="noreferrer"> 
                    <span><FaCertificate /></span>View Certificate
                    </a>
                    </li> 
                </ul>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
