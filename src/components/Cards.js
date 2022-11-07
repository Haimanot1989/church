import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeTigrinyaBibleStudyOnZoom =
    onlineMeetings["europeTigrinyaBibleStudyOnZoom"];
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const newYearConferenceNorway = conferences["newYearConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        <Card {...newYearConferenceNorway} />
      </div>
    </>
  );
};

export default Cards;
