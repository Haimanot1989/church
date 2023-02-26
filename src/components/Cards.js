import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const abidjanConference2023 = conferences["abidjanConference2023"];
  const annualConferenceNorway = conferences["annualConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        <Card {...abidjanConference2023} />
      </div>
      <div className="card-deck mb-2">
        <Card {...annualConferenceNorway} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
