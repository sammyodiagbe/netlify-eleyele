import React, { useState } from "react";
import { Link } from "react-router-dom";
import brand_logo from "../../assets/rainbow.svg";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const openNav = () => {
    setOpen(true);
  };

  const closeNav = () => {
    setOpen(false);
  };
  return (
    <nav className="navigation">
      <div className="container">
        <a href="#brand_name" className="brand-name">
          <img src={brand_logo} alt="brand logo" className="brand_logo" />
          Eleyele Cathedral
        </a>
        <div className="burger" onClick={openNav}>
          <div />
          <div />
          <div />
        </div>
        <div className="navigation-links">
          <ul className="desktop-links">
            <li>
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <a href="#church-vision" onClick={closeNav}>
                Our Vision
              </a>
            </li>
            <li>
              <a href="#weekly-events" onClick={closeNav}>
                Weekly Events
              </a>
            </li>
            <li>
              <a href="#send_us_a_message" onClick={closeNav}>
                Contact us
              </a>
            </li>
            <li>
              <a href="#church-history" onClick={closeNav}>
                Church History
              </a>
            </li>
            <li>
              <a href="#harvest" onClick={closeNav}>
                Church Harvest
              </a>
            </li>
          </ul>
        </div>
        <div className={`mobile-navigation ${open && "open"}`}>
          <button className="cls-btn" onClick={closeNav}>
            &times;
          </button>
          <ul className="mobile-links">
            <li>
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <a href="#church-vision" onClick={closeNav}>
                Our Vision
              </a>
            </li>
            <li>
              <a href="#weekly-events" onClick={closeNav}>
                Weekly Events
              </a>
            </li>
            <li>
              <a href="#send_us_a_message" onClick={closeNav}>
                Contact us
              </a>
            </li>
            <li>
              <a href="#church-history" onClick={closeNav}>
                Church History
              </a>
            </li>
            <li>
              <a href="#harvest" onClick={closeNav}>
                Church Harvest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
