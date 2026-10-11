import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";
const Cards = () => {
  const newYearConference20262027 = conferences["newYearConference20262027"];
  return (
    <>
      <div className="card-deck mb-2">
        <Card {...newYearConference20262027} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
