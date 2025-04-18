import React, { useState } from "react";
import "./flight.css";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "../components/Pagination";
import { trends } from "../data";
export default function Flight() {
  const [clicked, setClicked] = useState(false);
  const [passenger, setPassenger] = useState({
    adult: 2,
    kids: 2,
  });

  const optionHandler = (name, operation) => {
    setPassenger((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? passenger[name] + 1 : passenger[name] - 1,
      };
    });
  };

  const [flightType, setFlightType] = useState("round");

  return (
    <div className="flight-container">
      <div className="flight-search-container">
        <div className="option-div">
          <input
            type="radio"
            name="flight-facility"
            value="round"
            checked={flightType==="round"}
            onChange={(e) => {
              setFlightType(e.target.value);
            }}
          />
          <label htmlFor="round">round-trip</label>
          <input
            type="radio"
            name="flight-facility"
            value="oneWay"
            onChange={(e) => {
              setFlightType(e.target.value);
            }}
          />
          <label htmlFor="one-way">one-way</label>
          <select name="" id="">
            <option value="econimie" selected>
              Economie
            </option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
          <input type="checkbox" />
          <label htmlFor="">Only direct flight</label>
        </div>
        <div className="flight-search-box">
          <div className="input-box">
            <MdFlightTakeoff />
            <input type="text" placeholder="Arlanda" />
          </div>
          <div className="icon-only">
            <button>
              <TbArrowsExchange />
            </button>
          </div>
          <div className="input-box">
            <MdFlightLand />
            <input type="text" placeholder="Paris" />
          </div>

          <div className="input-box">
            {flightType === "round" ? (
              <>
                <input type="date" />
                <input type="date" />
              </>
            ) : (
              <input type="date" />
            )}
          </div>
          <div className="input-box passengers">
            <FaUser />
            <small
              style={{ userSelect: "none" }}
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              {passenger.adult + passenger.kids} passangers
            </small>
            <IoIosArrowDown
              onClick={() => {
                setClicked(!clicked);
              }}
              style={{ cursor: "pointer" }}
            />
            <div
              className={
                clicked ? "passanger-options" : "passanger-options-hidden"
              }
            >
              <div className="options-container">
                <div className="option-name">Adult</div>
                <div className="increase-decrease-container">
                  <button
                    disabled={passenger.adult <= 1}
                    onClick={() => {
                      optionHandler("adult", "d");
                    }}
                  >
                    -
                  </button>
                  <span>{passenger.adult}</span>
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
                    disabled={passenger.kids <= 0}
                    onClick={() => {
                      optionHandler("kids", "d");
                    }}
                  >
                    -
                  </button>
                  <span>{passenger.kids}</span>
                  <button
                    onClick={() => {
                      optionHandler("kids", "i");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-only">
            <button>
              <CiSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="row-container flight-row-container">
        <h2>Popular Cities</h2>
        <small>
          Book flights to a destination popular with travelers from Sweden
        </small>
        <Pagination array={trends} amount={4} type={1} pixel={200} />
      </div>
    </div>
  );
}
