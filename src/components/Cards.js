import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";
const Cards = () => {
  const harvestConference2026 = conferences["harvestConference2026"];
  return (
    <>
      <div className="card-deck mb-2">
        <Card {...harvestConference2026} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
