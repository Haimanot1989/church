import React from "react";
import { GoLocation, GoAlert, GoInfo } from "react-icons/go";
import { MainLocation } from "./MainLocation";
import { OnlineLoacation } from "./OnlineLoacation";
import { ContactInfo } from "./ContactInfo";
import { ConfSubTypeTimeItem } from "./ConfSubTypeTimeItem";
import { Overlay } from "./Overlay";

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
                onlineLocation,
                hotelsNearBy,
                restaurantsNearBy,
                transportationInfo,
                isCancelled,
                cancelledMessage,
                importantMessage,
                invitation
              }) => {
  if (!imageUrl) {
    return <div className="card" style={{ border: "none" }}></div>;
  }
  return (
    <div className="card overlay-container card-font-style">
      {isCancelled && cancelledMessage && (
        <Overlay cancelledMessage={cancelledMessage} />
      )}
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
            <sup>{confStart.sup}</sup> {confStart.month}
            {confEnd && confEnd.date && `-  `}
            {confEnd && confEnd.date}
            <sup>{confEnd && confEnd.sup}</sup> {confEnd && confEnd.month}
          </h6>
          {mainLocation && <MainLocation {...mainLocation} />}
          {onlineLocation && <OnlineLoacation {...onlineLocation} />}
          {contactInformation && <ContactInfo {...contactInformation} />}
        </li>
        {invitation &&
          invitation.length > 0 &&
          invitation.map((value, key) => (
            <InvitationLetter {...value} key={key} />
          ))}
        <li className="list-group-item">
          {importantMessage && <AdditionalMessage {...importantMessage} />}
        </li>
        {confSubtypes && confSubtypes.length > 0 && (
          <CardSectionTitle sectionTitle="Programs" />
        )}
        {confSubtypes && confSubtypes.length > 0 ? (
          confSubtypes.map((value, key) => {
            return <ConfSubTypeItem {...value} key={key} />;
          })
        ) : (
          <ConfSubTypeItemDetailComingSoon />
        )}

        {transportationInfo && transportationInfo.length > 0 && (
          <CardSectionTitle sectionTitle="Transport information" />
        )}
        {transportationInfo &&
          transportationInfo.length > 0 &&
          transportationInfo.map((value, key) => {
            return <Transportation {...value} key={key} />;
          })}
        {restaurantsNearBy && restaurantsNearBy.length > 0 && (
          <CardSectionTitle sectionTitle="Restaurants nearby" />
        )}
        {restaurantsNearBy &&
          restaurantsNearBy.length > 0 &&
          restaurantsNearBy.map((value, key) => {
            return <Hotel {...value} key={key} />;
          })}
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

const AdditionalMessage = ({ content, type }) => {
  const textClass = type && type === "info" ? "text-info" : "text-danger";
  const Icon = type && type === "info" ? <GoInfo /> : <GoAlert />;
  return (
    <p className={textClass}>
      {Icon} {content}
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
const InvitationLetter = ({ id, type, uri }) => {
  return (
    <ul className="list-group">
      <li className="custom-li-style list-group-item" key={id}>
        <a href={uri}>{type}</a>
      </li>
    </ul>
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
          <li className="custom-li-style list-group-item" key={id}>
            <span className="li-label">Website:</span> <a href={{ webSite }}>click here to visit their website</a>
          </li>
        </ul>
      </div>
    </li>
  );
};

const Transportation = ({
                          title,
                          description,
                          type,
                          distance
                        }) => {
  let id = title.replace(/\s/g, "");
  if (type === "info") {
    return (
      <li key={id} className="list-group-item">
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-dark">
            {title}
          </h5>
          <ul className="list-group">
            <li className="custom-li-style list-group-item" key={id}>
              <a href={description}>click here for more information</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li key={id} className="list-group-item">
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-dark">
          From {title}
          <span className="text-muted small-text">{distance}</span>
        </h5>
        <ul className="list-group">
          <li className="custom-li-style list-group-item" key={id}>
            <span className="li-label">Route:</span>{" "}
            <a href={description}>click here for the route</a>
          </li>
        </ul>
      </div>
    </li>
  );

};

export default Card;
