import React from "react";
import "./Projects.css";
import projectData from "../../Data/projectsData";
import { AiOutlineLink } from "react-icons/ai";

function Projects() {
  return (
    <div className="projects" id="#projects">
      <span></span>
      <h1>PROJECTS</h1>
      <div className="containerProjects">
        {projectData.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="img">
              <img src={project.img} loading="lazy" alt={project.imgAlt} />
            </div>
            <div className="body">
            <div className="info">
              <p className="title">{project.title}</p>
              <p className="description">{project.description}</p>
              <div className="tags">
                  {project.tags.map((tags) =>(
                        <ul key={tags.id}>
                              {
                                    tags.tagss.map((tag1) =>{
                                          return <li>{tag1}</li>
                                          
                                    })
                              }
                        </ul>
                  ))}
              </div>
            </div>
            <div className="buttons">
              <div className="socialLinks">
                <ul>
                  <li>
                  <a href={project.repoLink} target="_blank" rel="noreferrer"> 
                    <span><AiOutlineLink /></span>Live Demo
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

export default Projects;
