import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const octoberConference2025 = conferences["octoberConference2025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...octoberConference2025} />
      </div>
    </>
  );
};

export default Cards;
