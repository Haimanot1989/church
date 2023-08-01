import React from "react";
import conferences from "./data/conferences.json";
import Card from "./Card";

const Cards = () => {
  const annualConferenceNorway = conferences["annualConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...annualConferenceNorway} />
      </div>
    </>
  );
};

export default Cards;
