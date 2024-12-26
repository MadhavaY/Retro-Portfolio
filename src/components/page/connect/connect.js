import React, { useRef } from "react";
import "./connect.scss";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

function Connect() {
  const connect_headerRef = useRef(null);
  return (
    <div className="connect">
      <section className="connect-section">
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatedText
            className="header4"
            textToAnimate="Connect"
            ref={connect_headerRef}
          ></AnimatedText>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="connect-list"
        >
          <ul>
            <li>
              {" "}
              <a
                href="https://github.com/MadhavaY?tab=overview&from=2024-10-01&to=2024-10-15"
                target="_blank"
              >
                Github
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/madhava-y/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:madhavayedla@gmail.com" target="_blank">
                Email
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.instagram.com/madhava.yedla/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://drive.google.com/file/d/1ISw797FlN30-DqPzFjwCedAnTJbGZjRU/view?usp=sharing"
                target="_blank"
              >
                CV
              </a>
            </li>
          </ul>
        </motion.section>
      </section>
    </div>
  );
}

export default Connect;
