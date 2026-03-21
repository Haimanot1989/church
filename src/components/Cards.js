import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const theLordSupperConferenceNorway2026 =
    conferences["theLordSupperConferenceNorway2026"];
  const annualConferenceNorway = conferences["annualConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...theLordSupperConferenceNorway2026} />
        <Card {...annualConferenceNorway} />
      </div>
    </>
  );
};

export default Cards;
