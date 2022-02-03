import React from 'react';
import './Projects.css'
import { AiOutlineLink } from "react-icons/ai";

function Projects() {
      return (
            <div className="projects">
                  <h5>PROJECTS</h5>
                  <div className="containerProjects">
                        <div className="projectCard">
                              <div className="img">
                              <img src="https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg" alt="project" />
                              </div>
                              <div className="info">
                              <p className='title'>Portfolio Project</p>
                              <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, quis?</p>
                              <div className="tags">
                              <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                              </ul>
                              </div>
                              </div>
                              <div className="buttons">
                              <div className="socialLinks">
                              <ul>
                              <a href="/" target="_blank" >
                              <li><span><AiOutlineLink /></span> Live Demo</li>
                              </a>
                              </ul>
                              </div>
                              </div>
                        </div>

                  </div>
            </div>
      )
}

export default Projects;