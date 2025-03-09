import React from "react";
import Searchbar from "../components/Searchbar";
import "./explore.css";
import { exploreRooms } from "../data";
import RoomCard from "../components/RoomCard";
export default function Explore() {
  return (
    <div className="explore-container">
      <div className="expore-banner-container">
        <div className="explore-image-container">
          <div className="overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="search-bar-container">
          <Searchbar />
        </div>
      </div>
      <div className="room-explore-container">
        <div className="room-filter">filter</div>
        <div className="room-row">
          {exploreRooms.map((data, i) => (
            <RoomCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
