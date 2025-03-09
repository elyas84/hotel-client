import React from "react";
import Searchbar from "../components/Searchbar";
import RoomCard from "../components/RoomCard";
import { exploreRooms } from "../data";

export default function Booking() {
  return (
    <div className="explore-container">
      <div className="expore-banner-container">
        <div className="explore-image-container">
          <div className="overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1635111300299-e6e677daf7b7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
