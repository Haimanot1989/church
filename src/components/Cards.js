import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const octoberConference2024 = conferences["octoberConference2024"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...octoberConference2024} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
