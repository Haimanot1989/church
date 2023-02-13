import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const abidjanConference2023 = conferences["abidjanConference2023"];
  const februaryConferenceUK2023 = conferences["februaryConferenceUK2023"];

  return (
    <>
      <div className="card-deck mb-2">
        <Card {...februaryConferenceUK2023} />
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
      </div>
      <div className="card-deck mb-2">
        <Card {...abidjanConference2023} />
        <Card {...{}} />
      </div>
    </>
  );
};

export default Cards;
