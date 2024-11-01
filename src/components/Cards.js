import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const newYearConference20242025 = conferences["newYearConference20242025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...newYearConference20242025} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
