import React, { useState, useRef } from "react";
import "./projects.scss";
import RQG from "./images/RQG.png";
import portfolio from "./images/portfolio.png";
import BTD2 from "./images/BTD 2.png";
import tictactoe from "./images/tictactoe.png";
import architecture from "./images/architecture.png";
import sentiment from "./images/senitment.png"
import f1 from "./images/f1.png";
import f11 from "./images/ff1.png";
import retail from "./images/Retail Shop.png"
import hotel from "./images/Hotel Revenue.png"
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

const Projects = () => {
  // List of projects and their corresponding image paths
  const projects = [
    {
      name: "Sentiment Span Extraction ",
      image: sentiment,
      link: "https://github.com/MadhavaY/sentiment-span-extraction",
    },
    {
      name: "Brain Tumor Detection",
      image: architecture,
      link: "",
    },
    {
      name: "Synthetic Data with GANs",
      image: BTD2,
      link: "https://github.com/MadhavaY/TumorCycleGan",
    },
    {
      name: "Retail Shop Dashboard (PBI)",
      image: retail,
      link: "",
    },
    {
      name: "Hotel Revenue Dashboard (PBI)",
      image: hotel,
      link: "/",
    },
    {
      name: "F1 Lap Time Prediction",
      image: f1,
      link: "https://github.com/MadhavaY/F1LapTimePrediction",
    },

    {
      name: "Portfolio",
      image: portfolio,
      link: "https://madhavaportfolio.vercel.app/",
    },

    {
      name: "TicTacToe",
      image: tictactoe,
      link: "https://tictactoe-madhavay.vercel.app/",
    },

    {
      name: "Random Quotes Generator",
      image: RQG,
      link: "https://infinitequote.netlify.app/",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const project_headerRef = useRef(null);
  return (
    <div>
      <section className="projects-section">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatedText
            className="header3"
            textToAnimate="Projects"
            ref={project_headerRef}
          ></AnimatedText>
        </motion.section>
        <section className="projects-list">
          <ul>
            {projects.map((project, index) => (
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </section>
      </section>

      {hoveredProject && (
        <div className="project-images-div">
          <img
            className="project-image"
            src={hoveredProject.image}
            alt={hoveredProject.name}
            style={{
              opacity: hoveredProject ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}

            // style={{ width: "300px", height: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
