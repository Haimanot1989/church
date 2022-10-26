import React from "react";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";

const Cards = () => {
  const europeTigrinyaBibleStudyOnZoom =
    onlineMeetings["europeTigrinyaBibleStudyOnZoom"];
  const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
  const novemberConference2022 = conferences["novemberConference2022"];
  const newYearConferenceNorway = conferences["newYearConferenceNorway"];

  return (
    <>
      <div className="card-deck mb-2">
        <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        <OnlineMeetingCard {...europeTigrinyaBibleStudyOnZoom} />
      </div>
      <div className="card-deck mb-2">
        <Card {...novemberConference2022} />
        <Card {...newYearConferenceNorway} />
      </div>
    </>
  );
};

export default Cards;
