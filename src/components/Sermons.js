import React from "react";
import SermonCard from "./SermonCard";
import sermons from "./data/sermons.json";

const Sermons = () => {
  return (
    <div className="album py-5 bg-light position-main">
      <div className="container">
        <div className="row">
          {sermons["sermons"] &&
            sermons["sermons"].map(sermon => {
              return <SermonCard {...sermon} key={sermon.title} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Sermons;
