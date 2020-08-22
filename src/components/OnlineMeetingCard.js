import React from "react";
import { ConfSubTypeTimeItem } from "./ConfSubTypeTimeItem";
import { ContactInfo } from "./ContactInfo";
import { MainLocation } from "./MainLocation";

export const OnlineMeetingCard = ({
  zoomInfo,
  zoomInfoAmharic,
  imageUrl,
  importantMessage,
  title,
  time,
  contactInformation
}) => {
  return (
    <div className="card">
      <img
        className="card-img-top img-height-equalizer "
        src={imageUrl}
        alt={title}
      />
      <ul className="list-group list-group-flush" style={{ listStyle: "none" }}>
        <li key="mainBody" className="list-group-item">
          <h5 className="card-title">{title} - via Zoom</h5>
          {zoomInfo && <MeetingInfo {...zoomInfo} />}
          {zoomInfoAmharic && <MeetingInfo {...zoomInfoAmharic} />}
        </li>
        <li className="list-group-item">
          {importantMessage && <AdditionalMessage {...importantMessage} />}
        </li>
        <span style={{ padding: ".75rem 1.25rem" }}>
          {time &&
            time.map((item, key) => (
              <ConfSubTypeTimeItem {...item} key={key} />
            ))}
        </span>
        <li className="list-group-item">
          {contactInformation && <ContactInfo {...contactInformation} />}
        </li>
      </ul>
    </div>
  );
};

const AdditionalMessage = ({ content }) => {
  return content.map((item, key) => {
    return <p key={key}>{item}</p>;
  });
};

const MeetingInfo = zoomInfo => {
  return (
    <>
      <h6 className="card-subtitle mb-2 text-muted">
        {zoomInfo.language} Meeting ID: {zoomInfo.meetingId}
      </h6>
      {zoomInfo.meetingPassword && <MeetingPassword {...zoomInfo} />}
      {zoomInfo.meetingLink && <MainLocation {...zoomInfo.meetingLink} />}
    </>
  );
};

const MeetingPassword = zoomInfo => {
  return (
    <>
      {" "}
      <h6 className="card-subtitle mb-2 text-muted">
        {zoomInfo.language} Password: {zoomInfo.meetingPassword}
      </h6>
    </>
  );
};
