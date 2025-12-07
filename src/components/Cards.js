import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const newYearConference20252026 = conferences["newYearConference20252026"];
  const februaryConferenceUK2026 = conferences["februaryConferenceUK2026"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...newYearConference20252026} />
        <Card {...februaryConferenceUK2026} />
      </div>
    </>
  );
};

export default Cards;
