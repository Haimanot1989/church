import React from "react";
import { ConfSubTypeTimeItem } from "./ConfSubTypeTimeItem";
import { ContactInfo } from "./ContactInfo";
import { MainLocation } from "./MainLocation";

export const OnlineMeetingCard = ({
  zoomInfo,
  imageUrl,
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
          <h6 className="card-subtitle mb-2 text-muted">
            Meeting ID: {zoomInfo && zoomInfo.meetingId}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Password: {zoomInfo && zoomInfo.meetingPassword}
          </h6>
          {zoomInfo && zoomInfo.meetingLink && (
            <MainLocation {...zoomInfo.meetingLink} />
          )}
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
