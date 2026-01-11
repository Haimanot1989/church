import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const februaryConferenceUK2026 = conferences["februaryConferenceUK2026"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...februaryConferenceUK2026} />
      </div>
    </>
  );
};

export default Cards;
