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
  contactInformation,
  platformName
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
          <h5 className="card-title">
            {title} - via {platformName}
          </h5>
          {zoomInfo && <MeetingInfo {...zoomInfo} />}
          {zoomInfoAmharic && <MeetingInfo {...zoomInfoAmharic} />}
          {contactInformation && <ContactInfo {...contactInformation} />}
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
      {zoomInfo.meetingId && <MeetingId {...zoomInfo} />}
      {zoomInfo.meetingPassword && <MeetingPassword {...zoomInfo} />}
      {zoomInfo.meetingLink && <MainLocation {...zoomInfo.meetingLink} />}
    </>
  );
};

const MeetingId = zoomInfo => {
  return (
    <>
      {" "}
      <h6 className="card-subtitle mb-2 text-muted">
        {zoomInfo.language} Meeting ID: {zoomInfo.meetingId}
      </h6>
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