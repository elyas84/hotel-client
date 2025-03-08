import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiPalmTree } from "react-icons/gi";
import { RiArrowDownSFill, RiArrowDropUpFill } from "react-icons/ri";
import "./header.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
export default function Header() {
  const activeNavLink = ({ isActive }) => {
    return {
      color: isActive && "#3e8ed0",
      borderBottom: isActive && "2px solid #3e8ed0",
      padding: isActive && "0 0 7px 0",
    };
  };

  const [buttonClicked, setButtonClicked] = useState(false);
  const openMobileMenu = () => {
    setButtonClicked(!buttonClicked);
  };
  return (
    <div className="header-container">
      <nav>
        <ul className="main-navbar">
          <li>
            <NavLink to="/" style={activeNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" style={activeNavLink}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeNavLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={activeNavLink}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="logo">
          <NavLink to="/">
            <span>
              <GiPalmTree />
            </span>
          </NavLink>
        </div>
        <ul className="right-ul">
          <div className="links">
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaYoutube />
            </button>
          </div>
          <div className="book-room-btn">
            <Link to="/booking">
              <button>Book A Room</button>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="mobile-nav">
        <div className="mobile-nav-logo">
          <NavLink to="/">
            <span>
              <GiPalmTree />
            </span>
          </NavLink>
        </div>
        <div className="mobile-bar">
          <button
            onClick={() => {
              openMobileMenu();
            }}
          >
            {buttonClicked ? <RiArrowDropUpFill /> : <RiArrowDownSFill />}
          </button>
        </div>
        <ul
          onClick={() => {
            openMobileMenu();
          }}
          className={
            buttonClicked ? "main-navbar-mobile" : "main-navbar-mobile-hidden"
          }
        >
          <li>
            <NavLink to="/" style={activeNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" style={activeNavLink}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeNavLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={activeNavLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" style={activeNavLink}>
              Book A Room
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
