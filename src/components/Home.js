import React from "react";
import { PageDescriber } from "./PageDescription";
import DoctrineOfSalvationIntroCard from "./DoctrineOfSalvationIntroCard";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import onlineMeetings from "./data/onlineMeetings.json";
import conferences from "./data/conferences.json";
import Card from "./Card";

const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];
const churchTripToGermany2025 = conferences["churchTripToGermany2025"];

const Home = function() {
  let pageDescription = {
    title: "Jesus Alone is God Church of Europe"
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <DoctrineOfSalvationIntroCard />
        <div className="card-deck mb-2">
          <OnlineMeetingCard {...europeBibleStudyOnZoom} />
        </div>
        <div className="card-deck mb-2">
          <Card {...churchTripToGermany2025} />
        </div>
      </main>
    </>
  );
};

export default Home;
