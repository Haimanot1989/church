import React from "react";
import Card from "./Card";
import conferences from "./data/conferences.json";

const Cards = () => {
  const juneConferenceHungary2024 = conferences["juneConferenceHungary2024"];
  const augustConferenceUK2024 = conferences["augustConferenceUK2024"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...juneConferenceHungary2024} />
        <Card {...augustConferenceUK2024} />
      </div>
    </>
  );
};

export default Cards;
