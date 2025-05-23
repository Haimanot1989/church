import React from "react";
import { ConfSubTypeTimeItem } from "./ConfSubTypeTimeItem";
import { ContactInfo } from "./ContactInfo";
import { MeetingInfo } from "./MeetingInfo";
import { Overlay } from "./Overlay";
import { GoAlert, GoInfo } from "react-icons/go";

export const OnlineMeetingCard = ({
  zoomInfo,
  zoomInfoAmharic,
  zoomInfoTigrinya,
  imageUrl,
  isCancelled,
  cancelledMessage,
  importantMessage,
  title,
  time,
  contactInformation,
  platformName
}) => {
  return (
    <div className="card overlay-container card-font-style">
      {isCancelled && <Overlay cancelledMessage={cancelledMessage} />}
      <img
        className="card-img-top img-height-equalizer "
        src={imageUrl}
        alt={title}
      />
      <ul className="list-group list-group-flush" style={{ listStyle: "none" }}>
        <li key="mainBody" className="list-group-item">
          <h5 className="card-title">
            {title} {`${platformName ? `- via ${platformName}` : ""}`}
          </h5>
          {zoomInfo && <MeetingInfo {...zoomInfo} />}
          {zoomInfoAmharic && <MeetingInfo {...zoomInfoAmharic} />}
          {zoomInfoTigrinya && <MeetingInfo {...zoomInfoTigrinya} />}
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

const AdditionalMessage = ({ content, type }) => {
  const textClass = type && type === "info" ? "text-info" : "text-danger";
  const Icon = type && type === "info" ? <GoInfo /> : <GoAlert />;
  return (
    content &&
    Array.from(content).map((item, key) => (
      <div key={key}>
        <p className={textClass}>
          {Icon} {item}
        </p>
      </div>
    ))
  );
};

export const MeetingId = zoomInfo => {
  return (
    <>
      {" "}
      <h6 className="card-subtitle mb-2 text-muted">
        {zoomInfo.language} Meeting ID: {zoomInfo.meetingId}
      </h6>
    </>
  );
};
export const MeetingPassword = zoomInfo => {
  return (
    <>
      {" "}
      <h6 className="card-subtitle mb-2 text-muted">
        {zoomInfo.language} Password: {zoomInfo.meetingPassword}
      </h6>
    </>
  );
};
