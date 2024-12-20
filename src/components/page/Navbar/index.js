import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <section className="navbar-list">
        <ul>
          <li>
            <Link to="/" className="believe">
              [Home]
            </Link>
          </li>
          <li>
            <Link to="/about" className="learn">
              [About]
            </Link>
          </li>
          <li>
            <Link to="/projects" className="dream">[Projects]</Link>
          </li>
          <li>
            <Link to="/connect" className="connect">[Connect]</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Navbar;
