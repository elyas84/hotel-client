import React, { useState } from "react";
import { aboutBannerImages, cities, food, homeBanner, offeres } from "../data";
import "./home.css";
import Card from "../components/Card";
import SimpleSlider from "../components/SimpleSlider";
import CityCard from "../components/CityCard";

export default function Home() {
  /** pagination for cities */
  const [currentPageCity, setCurrentPageCity] = useState(1);
  const [cityPerPage, setCityPerPage] = useState(6);
  const lastCityIndex = currentPageCity * cityPerPage;
  const firstCituesIndex = lastCityIndex - cityPerPage;
  const currentCities = cities.slice(firstCituesIndex, lastCityIndex);
  let citiesSize = [];
  for (let i = 1; i <= cities.length / cityPerPage; i++) {
    citiesSize.push(i);
  }

  /** pagination for offers */
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentData = offeres.slice(firstPostsIndex, lastPostIndex);
  let arraySize = [];
  for (let i = 1; i <= offeres.length / postsPerPage; i++) {
    arraySize.push(i);
  }

  return (
    <div className="home-container">
      <div className="banner">
        <SimpleSlider array={homeBanner} />
      </div>
      <div className="home-page-about-section">
        <div className="home-page-about-section-top">
          <div className="top-left">
            <small>About Us</small>
            <h1>A Luxuries Hotel with Nature</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quisquam iusto vero voluptatum dolor unde maiores qui perferendis
              mollitia veritatis soluta deleniti nisi tenetur corrupti neque,
              atque alias animi esse consectetur ullam? Laborum ipsa tempore,
              dolorem illo consequatur ullam odit?
            </p>
          </div>
          <div className="top-right">
            <div className="top-right-row">
              {aboutBannerImages.map((img, i) => (
                <div className="top-right-image-container" key={i}>
                  <img src={img.image} alt="product-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="home-page-about-section-bottom">
          <div className="home-page-about-section-bottom-top">
            <small>Exploring</small>
            <h1>Explore the city</h1>
          </div>
          <div className="home-page-about-section-bottom-row-explore">
            {currentCities.map((data, i) => (
              <CityCard data={data} key={i} />
            ))}
          </div>
          <ul className="page-index-container">
            {citiesSize.map((page, i) => (
              <div className="button-container">
                <button
                  className="page-btn"
                  key={i}
                  onClick={() => {
                    setCurrentPageCity(page);
                  }}
                >
                  {page}
                </button>
              </div>
            ))}
          </ul>
        </div>

        <div className="home-page-about-section-bottom">
          <div className="home-page-about-section-bottom-top">
            <small>Our Offers</small>
            <h1>Ongoing Offers</h1>
          </div>
          <div className="home-page-about-section-bottom-row">
            {currentData.map((data, i) => (
              <Card data={data} key={i} />
            ))}
          </div>
          <ul className="page-index-container">
            {arraySize.map((page, i) => (
              <div className="button-container">
                <button
                  className="page-btn"
                  key={i}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </button>
              </div>
            ))}
          </ul>
          {/* <Pagination array={offeres} /> */}
        </div>
        <div className="home-page-about-section-top">
          <div className="top-right">
            <div className="top-right-row">
              {food.map((img, i) => (
                <div className="top-right-image-container" key={i}>
                  <img src={img.image} alt="content-image" />
                </div>
              ))}
            </div>
          </div>
          <div className="top-left">
            <small>Delicious Food</small>
            <h1>We Serve Fresh and Delicious Food</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quisquam iusto vero voluptatum dolor unde maiores qui perferendis
              mollitia veritatis soluta deleniti nisi tenetur corrupti neque,
              atque alias animi esse consectetur ullam? Laborum ipsa tempore,
              dolorem illo consequatur ullam odit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
