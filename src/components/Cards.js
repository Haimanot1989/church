import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const annualConference2025 = conferences["annualConference2025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...annualConference2025} />
      </div>
    </>
  );
};

export default Cards;
