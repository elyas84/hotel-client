import React from "react";
import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";
export default function Rating({ value }) {
  return (
    <div>
      <span style={{color:"#deb41c", marginRight: "5px"}}>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span style={{color:"#deb41c", marginRight: "5px"}}>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span style={{color:"#deb41c", marginRight: "5px"}}>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span style={{color:"#deb41c", marginRight: "5px"}}>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span style={{color:"#deb41c", marginRight: "5px"}}>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    </div>
  );
}