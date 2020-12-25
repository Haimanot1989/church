import React from "react";
import { GoLocation, GoAlert } from "react-icons/go";
import { MainLocation } from "./MainLocation";
import { ContactInfo } from "./ContactInfo";
import { ConfSubTypeTimeItem } from "./ConfSubTypeTimeItem";
import conferences from "./data/conferences.json";
import onlineMeetings from "./data/onlineMeetings.json";
import { OnlineMeetingCard } from "./OnlineMeetingCard";

const Cards = () => {
  let decemberConference2020 = onlineMeetings["decemberConference2020"];
  let europeBibleStudy = onlineMeetings["europeBibleStudyOnZoom"];

  return (
    <>
      <div className="card-deck mb-2">
        <OnlineMeetingCard {...decemberConference2020} />
      </div>
    </>
  );
};

const Card = ({
  imageUrl,
  confType,
  city,
  country,
  confStart,
  confEnd,
  confSubtypes,
  contactInformation,
  mainLocation,
  hotelsNearBy,
  isCancelled,
  importantMessage
}) => {
  if (!imageUrl) {
    return <div className="card" style={{ border: "none" }}></div>;
  }
  return (
    <div className="card overlay-container card-font-style">
      {isCancelled && <Overlay />}
      <img
        className="card-img-top img-height-equalizer "
        src={imageUrl}
        alt="City"
      />
      <ul className="list-group list-group-flush">
        <li key="mainBody" className="list-group-item li-first">
          {/* confType, city, country */}
          <h5 className="card-title">
            {confType} - {city}, {country}
          </h5>
          {/* conStart, confEnd */}
          <h6 className="card-subtitle mb-2 text-muted">
            {confStart.date}
            <sup>{confStart.sup}</sup> {confStart.month} -{" "}
            {confEnd && confEnd.date}
            <sup>{confEnd && confEnd.sup}</sup> {confEnd && confEnd.month}
          </h6>
          {mainLocation && <MainLocation {...mainLocation} />}
          {contactInformation && <ContactInfo {...contactInformation} />}
        </li>
        <li className="list-group-item">
          {importantMessage && <AdditionalMessage {...importantMessage} />}
        </li>
        {confSubtypes.length > 0 && (
          <CardSectionTitle sectionTitle="Programs" />
        )}
        {confSubtypes.length > 0 ? (
          confSubtypes.map((value, key) => {
            return <ConfSubTypeItem {...value} key={key} />;
          })
        ) : (
          <ConfSubTypeItemDetailComingSoon />
        )}
        {hotelsNearBy && hotelsNearBy.length > 0 && (
          <CardSectionTitle sectionTitle="Hotels nearby" />
        )}
        {hotelsNearBy &&
          hotelsNearBy.length > 0 &&
          hotelsNearBy.map((value, key) => {
            return <Hotel {...value} key={key} />;
          })}
      </ul>
    </div>
  );
};

const Overlay = () => {
  return (
    <div id="overlay">
      <span className="o-text">Cancelled due to coronavirus pandemic.</span>
    </div>
  );
};

const AdditionalMessage = ({ content }) => {
  return (
    <p className="text-danger">
      <GoAlert /> {content}
    </p>
  );
};
const CardSectionTitle = ({ sectionTitle }) => {
  return (
    <li className="list-group-item new-card-section">
      <h5>{sectionTitle}</h5>
    </li>
  );
};
const ConfSubTypeItemDetailComingSoon = () => {
  return (
    <li key="detail" className="list-group-item">
      <div className="card-body">
        <p className="card-text">More details will be coming soon!</p>
      </div>
    </li>
  );
};
const ConfSubTypeItem = ({ id, title, location, time }) => {
  return (
    <li key={id} className="list-group-item">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {title} {location && <ConfSubTypeItemLocation {...location} />}
        </h6>
        <ul style={{ listStyle: "none" }}>
          {time.map((item, key) => (
            <ConfSubTypeTimeItem {...item} key={key} />
          ))}
        </ul>
      </div>
    </li>
  );
};

const ConfSubTypeItemLocation = location => {
  return (
    <>
      at{" "}
      <a href={location.map}>
        <GoLocation /> {location.address}
      </a>
    </>
  );
};

const Hotel = ({
  name,
  address,
  distance,
  webSite,
  phoneNumber,
  mapLocation
}) => {
  let id = name.replace(/\s/g, "");
  return (
    <li key={id} className="list-group-item">
      <div className="card-body">
        <a href={webSite}>
          <h5 className="card-subtitle mb-2 text-dark">
            {name}
            <span className="text-muted small-text"> ({distance})</span>
          </h5>
        </a>
        <ul className="list-group">
          <li className="custom-li-style list-group-item" key={id}>
            <span className="li-label">Address:</span>{" "}
            <a href={mapLocation}>{address}</a>
          </li>
          <li className="custom-li-style list-group-item" key={id}>
            <span className="li-label">Phone:</span> {phoneNumber}
          </li>
        </ul>
      </div>
    </li>
  );
};
export default Cards;
