import React from "react";
import { PageDescriber } from "./PageDescription";
import DoctrineOfSalvationIntroCard from "./DoctrineOfSalvationIntroCard";
import { OnlineMeetingCard } from "./OnlineMeetingCard";
import Card from "./Card";
import onlineMeetings from "./data/onlineMeetings.json";
import AnnouncementCard from "./AnnouncementCard";
import announcements from "./data/announcement.json";
const europeBibleStudyOnZoom = onlineMeetings["europeBibleStudyOnZoom"];

const Home = function() {
  const firstAnnouncementElement = announcements["announcements"][0];
  let pageDescription = {
    title: "Jesus Alone is God Church of Europe",
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <AnnouncementCard {...firstAnnouncementElement} />
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
