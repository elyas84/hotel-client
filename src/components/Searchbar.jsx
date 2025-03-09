import React, { useState } from "react";

import "./searchbar.css";
import {
  IoBedOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdKey, MdKeyOff } from "react-icons/md";

export default function Searchbar() {
  const [adult, setAdult] = useState(1);
  const adultPlusHandlder = () => {
    setAdult(1 + adult);
  };
  const adultMinusHandlder = () => {
    setAdult(adult - 1);
  };
  const [kid, setKid] = useState(1);
  const kidPlusHandlder = () => {
    setKid(1 + kid);
  };
  const kidMinusHandlder = () => {
    setKid(kid - 1);
  };
  const [room, setRoom] = useState(1);
  const roomPlusHandlder = () => {
    setRoom(1 + room);
  };
  const roomMinusHandlder = () => {
    setRoom(room - 1);
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
  };

  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={onsubmitHandler}>
        <div className="box">
          <span>
            <IoBedOutline />
          </span>
          <input type="text" placeholder="Where you want to go ?" />
        </div>
        <div className="box user-calendar-box">
          <span>
            <MdKey />
          </span>

          <input type="date" />
        </div>
        <div className="box user-calendar-box">
          <span>
            <MdKeyOff />
          </span>
          <input type="date" />
        </div>
        <div
          className="box user-input-box"
          onClick={() => {
            toggle();
          }}
        >
          <span>
            <LuUsers />
          </span>
          <small>2 adults. 0 children. 1 room</small>
        </div>
        <div className="search-box">
          <span>
            <IoSearchSharp />
          </span>
          <button>Search</button>
        </div>
      </form>
      <div
        className={
          clicked
            ? "room-selection-container"
            : "room-selection-container-hidden"
        }
      >
        <div className="selction-box">
          <small>Adult</small>
          <div className="control-box">
            <button
              onClick={() => {
                adultMinusHandlder();
              }}
            >
              -
            </button>
            <small>{adult}</small>
            <button
              onClick={() => {
                adultPlusHandlder();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="selction-box">
          <small>Kids</small>
          <div className="control-box">
            <button
              onClick={() => {
                kidMinusHandlder();
              }}
            >
              -
            </button>
            <small>{kid}</small>
            <button
              onClick={() => {
                kidPlusHandlder();
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="selction-box">
          <small>Room</small>
          <div className="control-box">
            <button
              onClick={() => {
                roomMinusHandlder();
              }}
            >
              -
            </button>
            <small>{room}</small>
            <button
              onClick={() => {
                roomPlusHandlder();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
