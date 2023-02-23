import "./topbar.css";
import { Link } from "react-scroll";
import { useState } from "react";
export default function Topbar() {
  return (
    <div className="nav-container">
      <div className="nav">
        <Link to="home" id="port">
          PortFo<span id="lio">lio.</span>
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="achievement" activeClass="active"  spy={true} smooth={true} offset={-100} duration={500}>
            Achievements
          </Link>
        </li>
        <li className="nav-item">
          <Link to="project" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="foot-container" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
            Connect
          </Link>
        </li>
      </ul>
    </div>
  );
}
