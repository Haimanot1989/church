import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const octoberConference2024 = conferences["octoberConference2024"];
  const newYearConference20242025 = conferences["newYearConference20242025"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...octoberConference2024} />
        <Card {...newYearConference20242025} />
      </div>
    </>
  );
};

export default Cards;
