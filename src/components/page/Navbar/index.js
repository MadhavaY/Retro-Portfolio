import React, { useRef } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";

function Navbar() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const connectRef = useRef(null);
  return (
    <div className="navbar">
      <section className="navbar-list">
        <ul>
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link to="/" className="believe">
              <span>
                <AnimatedText
                  textToAnimate="[Home]"
                  ref={homeRef}
                ></AnimatedText>
              </span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link to="/connect" className="connect">
              <span>
                <AnimatedText
                  textToAnimate="[Connect]"
                  ref={connectRef}
                ></AnimatedText>
              </span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link to="/projects" className="dream">
              <span>
                <AnimatedText
                  textToAnimate="[Projects]"
                  ref={projectRef}
                ></AnimatedText>
              </span>
            </Link>
          </motion.li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
