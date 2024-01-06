import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const februaryConferenceUK2024 = conferences["februaryConferenceUK2024"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...februaryConferenceUK2024} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
