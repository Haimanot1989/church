import React from "react";
import PodcastApps from "./PodcastApps";
import podcasts from "./data/podcasts.json";

const DoctrineOfSalvationCard = () => {
  const sermons = podcasts.episodes;
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
          <PodcastApps />
        </div>
        {sermons.map(s => (
          <Player key={s.episodeUrl} {...s} />
        ))}
      </div>
    </>
  );
};

function Player({ episodeUrl, sermonUrl }) {
  return (
    <div className="card-body">
      <iframe
        src={episodeUrl}
        style={{ width: "100%" }}
        title="Jesus Alone is God"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="action-box">
        <a
          href={sermonUrl}
          className="btn btn-lg btn-secondary action-btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          {`Open the accompanying pdf`}
        </a>
      </div>
    </div>
  );
}
export default DoctrineOfSalvationCard;
