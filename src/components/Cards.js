import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const februaryConferenceUK2025 = conferences["februaryConferenceUK2025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...februaryConferenceUK2025} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
