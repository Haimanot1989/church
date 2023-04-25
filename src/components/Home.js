import React from "react";
import { PageDescriber } from "./PageDescription";
import AnnouncementCard from "./AnnouncementCard";
import DoctrineOfSalvationIntroCard from "./DoctrineOfSalvationIntroCard";
import announcements from "./data/announcement.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";
import onlineMeetings from "./data/onlineMeetings.json";
const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];

const Home = function() {
  const nepal2023 = announcements["announcements"][0];
  let pageDescription = {
    title: "Jesus Alone is God Church of Europe",
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <AnnouncementCard {...nepal2023} />
        <DoctrineOfSalvationIntroCard />
        <div className="card-deck mb-2">
          <OnlineMeetingCard {...europeBibleStudyOnZoom} />
          <Card {...{}} />
        </div>

      </main>
    </>
  );
};

export default Home;
