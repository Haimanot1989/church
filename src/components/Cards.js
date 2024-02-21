import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const augustConferenceUK2024 = conferences["augustConferenceUK2024"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...augustConferenceUK2024} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
