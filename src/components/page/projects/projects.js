import React, { useState } from "react";
import "./projects.css";
import RQG from "./images/RQG.png";
import portfolio from "./images/portfolio.png";
import BTD2 from "./images/BTD 2.png";
import tictactoe from "./images/tictactoe.png";
import architecture from './images/architecture.png'

const Projects = () => {
  // List of projects and their corresponding image paths
  const projects = [
    {
      name: "Brain Tumor Detection",
      image: architecture,
      link: ""
    },
    {
      name: "Synthetic Data with GANs",
      image: BTD2,
      link: "https://github.com/MadhavaY/TumorCycleGan"
    },
    { name: "Movie Recommendation system", 
      image: "",
      link: ""
    
    },

    { name: "Portfolio", 
      image: portfolio,
      link: "https://madhavaportfolio.vercel.app/"
    
    },

    { name: "TicTacToe", 
      image: tictactoe,
      link: "https://tictactoe-madhavay.vercel.app/"
    },

    { name: "Random Quotes Generator", 
      image: RQG,
      link: "https://infinitequote.netlify.app/"
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      <section className="projects-section">
        <section className="header3">Projects</section>
        <section className="projects-list">
          <ul>
            {projects.map((project, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>

      {/* Display the image when a project name is hovered */}
      {hoveredProject && (
        <div
          className="project-images-div"
        >
          <img
            className="project-image"
            src={hoveredProject.image}
            alt={hoveredProject.name}
            style={{
              opacity: hoveredProject ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}

            // style={{ width: "300px", height: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
