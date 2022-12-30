import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const newYearConferenceNorway = conferences["newYearConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...newYearConferenceNorway} />
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
      </div>
    </>
  );
};

export default Cards;
