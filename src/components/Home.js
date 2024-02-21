import React from "react";
import { PageDescriber } from "./PageDescription";
import DoctrineOfSalvationIntroCard from "./DoctrineOfSalvationIntroCard";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import Card from "./Card";

const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];

const Home = function() {
  const augustConferenceUK2024 = conferences["augustConferenceUK2024"];

  let pageDescription = {
    title: "Jesus Alone is God Church of Europe"
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <DoctrineOfSalvationIntroCard />
        <div className="card-deck mb-2">
          <Card {...augustConferenceUK2024} />
          <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        </div>
      </main>
    </>
  );
};

export default Home;
