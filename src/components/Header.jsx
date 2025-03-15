import React, { useState } from "react";
import "./header.css";

import {
  IoBedOutline,
  IoCarSportOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import {
  MdFlight,
  MdOutlineTravelExplore,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    kids: 2,
    room: 1,
  });

  const optionHandler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header-container">
      <div className="header-main-container">
        <div className="header-top">
          <div className="logo">
            <NavLink to="/">FakeHotel.com</NavLink>
          </div>
          <div className="register-login">
            <button>Create account</button>
            <button>Log in</button>
          </div>
        </div>
        <div className="header-nav">
          <NavLink to="/">
            <small>
              <IoBedOutline /> Accommondation
            </small>
          </NavLink>
          <NavLink to="flight">
            <small>
              <MdFlight />
              Flight
            </small>
          </NavLink>
          <NavLink to="rent-car">
            <small>
              <IoCarSportOutline /> Rent car
            </small>
          </NavLink>
          <NavLink to="/attraction">
            <small>
              <MdOutlineTravelExplore />
              Attraction
            </small>
          </NavLink>
        </div>
        <div className="header-bottom">
          <h1>Find your next stay</h1>
          <p>Search for deals on hotels, vacation homes and more...</p>
        </div>
        {location.pathname === "/" ? (
          <div className="search-bar">
            <div className="search-bar-box">
              <IoBedOutline />
              <input type="text" placeholder="Where do you want to go ?" />
            </div>
            <div className="search-bar-box">
              <div className="date-container">
                <input type="date" />
              </div>
              <div className="date-container">
                <input type="date" />
              </div>
            </div>
            <div className="search-bar-box search-bar-box-options">
              <small>
                <AiOutlineUser />
              </small>
              <small
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                {options.adult} adults. {options.kids} children. {options.room}{" "}
                room
              </small>
              <small>
                <MdOutlineKeyboardArrowDown
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                />
              </small>
              <div className={clicked ? "options" : "options-hidden"}>
                <div className="options-container">
                  <div className="option-name">Adult</div>
                  <div className="increase-decrease-container">
                    <button
                      disabled={options.adult <= 1}
                      onClick={() => {
                        optionHandler("adult", "d");
                      }}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      onClick={() => {
                        optionHandler("adult", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="options-container">
                  <div className="option-name">Kids</div>
                  <div className="increase-decrease-container">
                    <button
                      disabled={options.kids <= 0}
                      onClick={() => {
                        optionHandler("kids", "d");
                      }}
                    >
                      -
                    </button>
                    <span>{options.kids}</span>
                    <button
                      onClick={() => {
                        optionHandler("kids", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="options-container">
                  <div className="option-name">Room</div>
                  <div className="increase-decrease-container">
                    <button
                      disabled={options.room <= 1}
                      onClick={() => {
                        optionHandler("room", "d");
                      }}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      onClick={() => {
                        optionHandler("room", "i");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-bar-box-btn">
              <button>
                <IoIosSearch />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
