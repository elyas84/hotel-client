import React from "react";
import "./roomCard.css";
export default function RoomCard({ data }) {
  return (
    <div className="room-card-container">
      <div className="room-card-image-container">
        <img src={data.image} alt="" />
      </div>
      <div className="room-card-info">
        <div className="room-card-top">
          <h3>{data.title}</h3>
          <small>very good</small>
          <small>{data.review} reviews</small>
          <span className="ratio-box"> {data.ratio}</span>
        </div>

        <div className="room-card-container-middle">
          <small>{data.place}</small>
        </div>
        <div className="room-card-price-container">
          <strong>$ {data.price}</strong>
        </div>
      </div>
      <div className="card-availibility-btn">
        <button>See availability</button>
      </div>
    </div>
  );
}
