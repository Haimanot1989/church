import React from "react";
import conferences from "./data/conferences.json";
import Card from "./Card";

const Cards = () => {
  const octoberConference2023 = conferences["octoberConference2023"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...octoberConference2023} />
      </div>
    </>
  );
};

export default Cards;
