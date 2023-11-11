import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const newYearConference20232024 = conferences["newYearConference20232024"];
  const februaryConferenceUK2024 = conferences["februaryConferenceUK2024"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...newYearConference20232024} />
        <Card {...februaryConferenceUK2024} />
      </div>
    </>
  );
};

export default Cards;
