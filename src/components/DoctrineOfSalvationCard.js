import React from "react";
import PodcastApps from "./PodcastApps";
const DoctrineOfSalvationCard = () => {
  const sermons = [
    {
      episodeUrl: "https://player.rss.com/onlyjesus/901955?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_THE_ONE_GOD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/901965?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_BAPTISM_IN_JESUS_NAME.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/900258?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_BAPTISM_IN_JESUS_NAME.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/910445?theme=dark",
      sermonUrl:
        "/sermons/DOCTRINE_OF_THE_ORIGIN_OF_THE_BODY_OF_THE_LORD_JESUS.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/919195?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_THE_HOLY_SPIRIT.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/935742?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_HOLINESS.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/941452?theme=dark",
      sermonUrl: "/sermons/DOCTRINE_OF_THE_CHURCH.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/950151?theme=dark",
      sermonUrl: "/sermons/DAVID_AT_ZIKLAG__THE_END_OF_FEAR.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/961047?theme=dark",
      sermonUrl: "/sermons/GOOD_FRIENDS_WILL_CARRY_YOU_TO_JESUS.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/973077?theme=dark",
      sermonUrl: "/sermons/JESUS_OUR_REFUGE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/979803?theme=dark",
      sermonUrl: "/sermons/IF_JESUS_IS_THE_ONLY_GOD_TO_WHOM_DID_HE_PRAY.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/995661?theme=dark",
      sermonUrl: "/sermons/SEEKING_THE_LORD_LIKE_MARY_MAGDALENE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1004182?theme=dark",
      sermonUrl: "/sermons/LESSONS_FROM_THE_OLIVE_TREE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1015255?theme=dark",
      sermonUrl: "/sermons/CLEAVING_TO_NAOMI.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1024820?theme=dark",
      sermonUrl: "/sermons/THE_DIVIDED_GARMENTS_OF_JESUS.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1033689?theme=dark",
      sermonUrl: "/sermons/THE_MOUNTAINS_AND_VALLEYS_OF_LIFE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1040588?theme=dark",
      sermonUrl: "/sermons/THE_STILL_SMALL_VOICE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1050320?theme=dark",
      sermonUrl: "/sermons/RIDING_WITH_CHRIST_THE_CONQUEROR.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1059224?theme=dark",
      sermonUrl: "/sermons/WHAT_DID_JESUS_DO_FOR_YOU.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1074865?theme=dark",
      sermonUrl: "/sermons/THE_TITHE_OF_THE_LORD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1087597?theme=dark",
      sermonUrl: "/sermons/I_WILL_BE_TO_THEM_A_LITTLE_SANCTUARY.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1090984?theme=dark",
      sermonUrl: "/sermons/THE_CHURCH_IN_BABYLON_REFUSING_TO_BOW.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1104193?theme=dark",
      sermonUrl:
        "/sermons/GIVE_THE_EMPTY_ROOM_TO_JESUS_A_LESSON_IN_HOSPITALITY_AND_FAITH.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1119612?theme=dark",
      sermonUrl: "/sermons/WHY_GO_TO_CHURCH.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1125424?theme=dark",
      sermonUrl: "/sermons/STAND_STILL_AND_SEE_THE_SALVATION_OF_THE_LORD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1139112?theme=dark",
      sermonUrl:
        "/sermons/JONAH__A_REMINDER_OF_OUR_RESPONSIBILITY_TO_THE_UNSAVED_WORLD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1139120?theme=dark",
      sermonUrl: "/books/THE_ONE_GOD_DOCTRINE.pdf"
    }
  ];
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
