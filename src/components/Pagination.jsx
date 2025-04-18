import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Pagination({ array, amount, type, pixel }) {
  const [currentPageData, setCurrentPageData] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(amount);
  const lastDataIndex = currentPageData * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const customArr = array.slice(firstDataIndex, lastDataIndex);
  let customArrSize = [];
  for (let i = 1; i <= Math.ceil(array.length / dataPerPage); i++) {
    customArrSize.push(i);
  }

  useEffect(() => {
    setDataPerPage(amount);
  }, [amount]);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(" + amount + ", 1fr)",
          gap: "20px",
        }}
      >
        {customArr.map((data, i) => (
          <Card type={type} data={data} key={i} pixel={pixel} />
        ))}
      </div>
      <ul className="page-index-container">
        {customArrSize.map((page, i) => (
          <button
            className={page === 1 ? "page-btn-focus" : "page-btn"}
            key={i}
            onClick={() => {
              setCurrentPageData(page);
            }}
          >
            {page}
          </button>
        ))}
      </ul>
    </>
  );
}
