import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const annualConferenceNorway = conferences["annualConferenceNorway"];
  const harvestConference2026 =
    conferences["harvestConference2026"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...annualConferenceNorway} />
        <Card {...harvestConference2026} />
      </div>
    </>
  );
};

export default Cards;
