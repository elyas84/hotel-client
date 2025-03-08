import React from "react";
import "./card.css";
export default function Card({ data }) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={data.image} alt="" />
      </div>
      <div className="card-info">
        <h4>{data.hotelName}</h4>
        <small>{data.place}</small>
        <div className="ratio-container">
          <span className="ratio-box"> {data.ratio}</span>
          <small>very good</small>
          <small>{data.review} reviews</small>
        </div>
        <div className="price-container">
          <small>{data.duration}</small>
          <span style={{ color: "red", textDecoration: "line-through" }}>
            $ {data.price}
          </span>
          <strong>${data.price - (data.price * data.discount) / 100}</strong>
      
        </div>
      </div>
    </div>
  );
}
