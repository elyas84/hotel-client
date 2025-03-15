import React, { useState } from "react";
import "./accommondation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { accomondationType, offeres, trends } from "../data";
import Pagination from "../components/Pagination";
export default function Accommondation() {
  return (
    <div className="accommondation-container">
      <div className="row-container">
        <h2>Explore different types of accommodations</h2>
        <Pagination array={accomondationType} amount={4} type={1} pixel={200} />
      </div>
      <div className="row-container">
        <h2>Trending destinations</h2>
        <small>
          Travelers looking for United Kingdom also booked these places
        </small>
        <Pagination array={trends} amount={3} type={1} pixel={400} />
      </div>
      <div className="row-container">
        <h2>Offers for the weekend</h2>
        <small>Save on stays March 21 - March 23</small>
        <Pagination array={offeres} amount={3} type={2} pixel={185} />
      </div>
      <div className="row-container">
        <h2>Stay at our best unique accommodations</h2>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex.
        </small>
        <Pagination array={offeres} amount={4} type={3} pixel={140} />
      </div>
    </div>
  );
}
