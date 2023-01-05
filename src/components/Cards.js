import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const februaryConferenceUK2023 = conferences["februaryConferenceUK2023"];

  return (
    <>
      <div className="card-deck mb-2">
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        <Card {...februaryConferenceUK2023} />
      </div>
    </>
  );
};

export default Cards;
