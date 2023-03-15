import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import announcements from "./data/announcement.json";

const Announcements = () => {
  return (
    <div className="album py-5 bg-light position-main">
      <div className="container">
        <div className="row">
          {announcements["announcements"] &&
            announcements["announcements"].map(announcement => {
              return (
                <AnnouncementCard {...announcement} key={announcement.title} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
