import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const churchTripToGermany2025 = conferences["churchTripToGermany2025"];
  const theLordSupperConferenceNorway2025 =
    conferences["theLordSupperConferenceNorway2025"];
  const annualConference2025 = conferences["annualConference2025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...theLordSupperConferenceNorway2025} />
        <Card {...churchTripToGermany2025} />
      </div>
      <div className="card-deck mb-2">
        <Card {...annualConference2025} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
