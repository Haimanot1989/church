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
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1149727?theme=dark",
      sermonUrl: "/sermons/THE_MOUNT_OF_OLIVES.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1160963?theme=dark",
      sermonUrl: "/sermons/A_WAY_OF_ESCAPE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1196923?theme=dark",
      sermonUrl:
        "/sermons/THE_GLORY_OF_THE_FATHER_IS_THE_SAME_AS_THE_GLORY_OF_THE_SON.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1204059?theme=dark",
      sermonUrl: "/sermons/ISAAC__PERFECT_TRUST_IN_THE_WILL_OF_GOD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1219259?theme=dark",
      sermonUrl: "/sermons/YOU_ARE_THE_TEMPLE_OF_GOD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1233344?theme=dark",
      sermonUrl: "/sermons/THY_FAITH_HAS_MADE_THEE_WHOLE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1244393?theme=dark",
      sermonUrl:
        "/sermons/THE_CROWNS_OF_VICTORY_A_CHRISTIANS_ETERNAL_REWARD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1256345?theme=dark",
      sermonUrl:
        "/sermons/GIVE_ME_ALSO_SPRINGS_OF_WATER_THE_REQUEST_OF_ACHSAH.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1259504?theme=dark",
      sermonUrl: "/sermons/THE_POWER_OF_THE_WORD_OF_GOD.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1278094?theme=dark",
      sermonUrl:
        "/sermons/FROM_DEACON_TO_PREACHER_TO_MARTYR_THE_STORY_OF_STEPHEN.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1278100?theme=dark",
      sermonUrl: "/sermons/JESUS_THE_PRINCE_OF_PEACE.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1292905?theme=dark",
      sermonUrl: "/sermons/THE_PURPOSE_OF_UNITY.pdf"
    },
    {
      episodeUrl: "https://player.rss.com/onlyjesus/1308405?theme=dark",
      sermonUrl: "/sermons/THE_JUDGEMENT_OF_THE_QUEEN_OF_SHEBA.pdf"
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
