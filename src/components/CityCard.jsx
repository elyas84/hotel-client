import React from "react";
import './cityCard.css'
export default function CityCard({ data }) {
  return (
    <div className="city-card-container">
      <div className="city-card-image-container">
        <img src={data.image} alt="" />
      </div>
      <div className="city-card-info">
        <h3>{data.city}</h3>
        <small>{data.accommodations} accommodations</small>
      </div>
    </div>
  );
}
