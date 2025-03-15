import React, { useEffect, useState } from "react";
import "./card.css";
export default function Card({ type, data, pixel }) {
  console.log(data);

  const [imageSize, setImageSize] = useState(160);

  useEffect(() => {
    setImageSize(pixel);
  }, [pixel]);
  return (
    <>
      {type === 1 ? (
        <>
          <div className="card-container-type-1">
            <div style={{ width: "100%", height: imageSize + "px" }}>
              <img
                src={data.image}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "7px",
                }}
              />
            </div>
            <p className="card-type-1-title">{data.title}</p>
          </div>
        </>
      ) : type === 2 ? (
        <>
          <div className="card-container-type-2">
            <div className="badge">{data.discount} %</div>
            <div style={{ width: "100%", height: imageSize + "px" }}>
              <img
                src={data.image}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "7px 7px 0 0",
                }}
              />
            </div>
            <div className="card-body-container">
              <div className="card-body-top">
                <h3>{data.title}</h3>
                <small>{data.place}</small>
              </div>
              <div className="card-body-middle">
                <div className="ratio">{data.ratio}</div>
                <small>{data.review} Reviews</small>
              </div>
              <div className="card-body-bottom">
                <small style={{ color: "grey" }}>{data.duration}</small>
                <small
                  style={{ textDecoration: "line-through", color: "#d4111e" }}
                >
                  ${data.price}
                </small>
                <strong>
                  ${data.price - data.price * (data.discount / 100)}
                </strong>
              </div>
            </div>
          </div>
        </>
      ) : type === 3 ? (
        <>
          <div className="card-container-type-2">
            <div style={{ width: "100%", height: imageSize + "px" }}>
              <img
                src={data.image}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "7px 7px 0 0",
                }}
              />
            </div>
            <div className="card-body-container">
              <div className="card-body-top">
                <h3>{data.title}</h3>
                <small>{data.place}</small>
              </div>
              <div className="card-body-middle">
                <div className="ratio">{data.ratio}</div>
                <small>{data.review} Reviews</small>
              </div>
         
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
