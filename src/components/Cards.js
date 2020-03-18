import React, { useState, useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { MainLocation } from "./MainLocation";
import { ContactInfo } from "./ContactInfo";

function fetchConfData(setConferences) {
  fetch("./conferences.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setConferences(data);
    });
}
const Cards = () => {
  const [conferences, setConferences] = useState({});
  useEffect(() => fetchConfData(setConferences), []);
  let mayConferenceGermany = conferences["mayConferenceGermany"];
  let theLordsSupperNorway = conferences["theLordsSupperNorway"];
  let theLordsSupperCanada = conferences["theLordsSupperCanada"];

  let theLordsSupperAustralia = conferences["theLordsSupperAustralia"];
  let annualConference = conferences["annualConference"];
  let octoberConference = conferences["octoberConference"];
  let newYearConference2021 = conferences["newYearConference2021"];
  let placeholder = {};
  return (
    <>
      <div className="card-deck mb-2">
        <Card {...theLordsSupperNorway} />
        <Card {...theLordsSupperCanada} />
      </div>
      <div className="card-deck mb-2">
        <Card {...theLordsSupperAustralia} />
        <Card {...mayConferenceGermany} />
      </div>
      <div className="card-deck mb-2">
        <Card {...annualConference} />
        <Card {...octoberConference} />
      </div>
      <div className="card-deck mb-2">
        <Card {...newYearConference2021} />
        <Card {...placeholder} />
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
  hotelsNearBy
}) => {
  if (!imageUrl) {
    return <div className="card" style={{ border: "none" }}></div>;
  }
  return (
    <div className="card">
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
            <sup>{confStart.sup}</sup> {confStart.month} - {confEnd.date}
            <sup>{confEnd.sup}</sup> {confEnd.month}
          </h6>
          {mainLocation && <MainLocation {...mainLocation} />}
          {contactInformation && <ContactInfo {...contactInformation} />}
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
const ConfSubTypeTimeItem = ({
  id,
  date,
  startTime,
  finishTime,
  lunchBreak
}) => {
  return (
    <li className="custom-li-style" key={id}>
      <p>
        <IoIosCalendar /> {date.day} {date.date}
        <sup>{date.sup}</sup> {date.month}
      </p>
      <p>
        {startTime && finishTime && (
          <ConfSubTypeStartAndFinishTime
            startTime={startTime}
            finishTime={finishTime}
          />
        )}
      </p>
      {lunchBreak && (
        <p>
          <FontAwesomeIcon icon={faUtensils} /> {lunchBreak}
        </p>
      )}
      <hr className="w-50 clearfix"></hr>
    </li>
  );
};

const ConfSubTypeStartAndFinishTime = ({ startTime, finishTime }) => {
  return (
    <>
      <IoMdTime /> {startTime} - {finishTime}{" "}
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
