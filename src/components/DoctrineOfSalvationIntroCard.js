import React from "react";
import PodcastApps from "./PodcastApps";
import podcasts from "./data/podcasts.json";
const DoctrineOfSalvationIntroCard = () => {
  const lastTitle = podcasts.episodes[podcasts.episodes.length - 1].title;
  return (
    <>
      <div className="card overlay-container card-font-style">
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <h5 className="card-title">Doctrine of Salvation</h5>
          </div>
          <div className="card-body books-description-box">
            <p className="card-text">
              Our podcast <strong>Jesus Alone is God</strong> contains the core
              teachings on how to be saved in a sound biblical way. New episodes
              are added weekly.
            </p>
          </div>
        </div>
        <div className="card-body">
          {/* This is the part that will be repeated for each sermon */}
          <iframe
            src="https://player.rss.com/onlyjesus?theme=dark"
            style={{ width: "100%", height: "400px" }}
            title={lastTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          >
            <a href="https://rss.com/podcasts/onlyjesus">
              {lastTitle} | RSS.com
            </a>
          </iframe>
          <div className="action-box pt8">
            <a
              href="/doctrine-of-salvation"
              className="btn btn-lg btn-secondary action-btn"
            >
              {`Open all the teachings with their accompanying pdf`}
            </a>
          </div>
        </div>
        <div className="card-body">
          <PodcastApps />
        </div>
      </div>
    </>
  );
};

export default DoctrineOfSalvationIntroCard;
