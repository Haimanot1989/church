import React from "react";
import PodcastApps from "./PodcastApps";
const DoctrineOfSalvationIntroCard = () => {
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
        <div className="card-body">
          <iframe
            src="https://player.rss.com/onlyjesus/901955?theme=dark"
            style={{ width: "100%" }}
            title="Jesus Alone is God"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className="action-box">
            <a
              href="/sermons/DOCTRINE_OF_THE_ONE_GOD.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-lg btn-secondary action-btn"
            >
              {`Open the accompanying pdf`}
            </a>
          </div>
          <div className="action-box pt8">
            <a
              href="/doctrine-of-salvation"
              className="btn btn-lg btn-secondary action-btn"
            >
              {`Open all the teachings with their accompanying pdf`}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctrineOfSalvationIntroCard;
