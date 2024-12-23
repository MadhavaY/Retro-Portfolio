import React , { useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AnimatedText from "../AnimatedText";

function Navbar() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const connectRef = useRef(null);
  return (
    <div className="navbar">
      <section className="navbar-list">
        <ul>
          <li>
            {/* <Link to="/about" style={{ display: "inline-block" }}>
              <AnimatedText textToAnimate="Go to About" ref={aboutRef} />{" "}
              
            </Link> */}

            <Link to="/" className="believe">
              <span>
                <AnimatedText textToAnimate="[Home]" ref={homeRef}></AnimatedText>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="learn">
              <span>
                <AnimatedText textToAnimate="[About]" ref={aboutRef}></AnimatedText>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="dream">
              <span>
                <AnimatedText textToAnimate="[Projects]" ref={projectRef}></AnimatedText>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/connect" className="connect">
              <span>
                <AnimatedText textToAnimate="[Connect]" ref={connectRef}></AnimatedText>
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
